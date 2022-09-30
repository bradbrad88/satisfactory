import { nanoid } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import type { EntityState } from "./entities";
import { items, recipes, buildings } from "data";

import type { Ingredient } from "data/recipes";
import type { Edge, EdgeInit } from "./edges";

interface ProductionStepInit {
  product: Ingredient;
  factory: string;
}

export interface ProductionStep {
  id: string;
  recipe: string;
  buildingCount: number;
  product: Ingredient;
  edges: string[];
  factory: string;
}

export const productionStepState = {
  productionSteps: { byId: {} as { [key: string]: ProductionStep }, allIds: [] as string[] },
};

const reducers = {
  createProductionStep: {
    reducer: (state: EntityState, action: { payload: ProductionStep }) => {
      const { id, factory } = action.payload;
      state.factories.byId[factory].productionSteps.push(id);
      action.payload.factory = factory;
      state.productionSteps.allIds.push(id);
      state.productionSteps.byId[id] = action.payload;
      reducers.optimiseBuidingCount(state, { payload: id });
    },
    prepare: (props: ProductionStepInit): { payload: ProductionStep } => {
      const productionStep = createProductionStep(props);
      return {
        payload: productionStep,
      };
    },
  },
  createProductionStepAndLink: {
    reducer: (state: EntityState) => {},
    prepare: (props: {
      productionStep: ProductionStepInit;
      edge: EdgeInit;
    }): { payload: { productionStep: ProductionStep; edge: Edge } } => {
      const productionStep = createProductionStep(props.productionStep);
      const edge = { ...props.edge, id: nanoid() };
      return { payload: { productionStep, edge } };
    },
  },
  updateRecipe: (
    state: EntityState,
    action: { payload: { productionStep: string; recipe: string } }
  ) => {
    const { productionStep, recipe } = action.payload;
    state.productionSteps.byId[productionStep].recipe = recipe;
    reducers.optimiseBuidingCount(state, { payload: productionStep });
  },
  updateProductQty: (
    state: EntityState,
    action: { payload: { productionStep: string; amount: number } }
  ) => {
    const { productionStep, amount } = action.payload;
    state.productionSteps.byId[productionStep].product.amount = amount;
    reducers.optimiseBuidingCount(state, { payload: productionStep });
  },
  updateBuildingCount: (
    state: EntityState,
    action: { payload: { productionStep: string; count: number } }
  ) => {
    const { productionStep, count } = action.payload;
    state.productionSteps.byId[productionStep].buildingCount = count;
  },
  optimiseBuidingCount: (state: EntityState, action: { payload: string }) => {
    const buildingStep = state.productionSteps.byId[action.payload];
    const recipe = recipes.map[buildingStep.recipe];
    const recipeItem = recipe.product.find(
      product => product.item === buildingStep.product.item
    );
    if (!recipeItem) return;
    const ratio = buildingStep.product.amount / recipeItem.amount;
    buildingStep.buildingCount = Math.ceil(ratio);
  },
  destroyProductionStep: (state: EntityState, action: { payload: string }) => {
    const id = action.payload;
    const factory = state.productionSteps.byId[id].factory;
    const idx = state.productionSteps.allIds.indexOf(id);
    delete state.productionSteps.byId[id];
    state.productionSteps.allIds.splice(idx, 1);
    const facIdx = state.factories.byId[factory].productionSteps.indexOf(id);
    state.factories.byId[factory].productionSteps.splice(facIdx, 1);
  },
  destroyProductionSteps: (state: EntityState, action: { payload: string[] }) => {
    const ids = action.payload;
    ids.forEach(id => {
      reducers.destroyProductionStep(state, { payload: id });
    });
  },
};

export const getProductionSteps = (state: RootState) => {
  const factory = state.entities.factories.active;
  if (!factory) return [];
  return state.entities.factories.byId[factory].productionSteps;
};

export const getProductionStep = (id: string) => {
  return (state: RootState) => {
    return state.entities.productionSteps.byId[id];
  };
};

export const getRequiredInputs = (id: string) => {
  return (state: RootState) => {
    const productionStep = state.entities.productionSteps.byId[id];
    const recipe = recipes.map[productionStep.recipe];
    const product = recipe.product.find(
      product => product.item === productionStep.product.item
    );
    if (!product) return null;
    const ratio = productionStep.product.amount / product.amount;
    return recipe.ingredients.map(ingredient => ({
      ...ingredient,
      amount: ingredient.amount * ratio,
    }));
  };
};

export const getByProducts = (id: string) => {
  return (state: RootState) => {
    const prodStep = state.entities.productionSteps.byId[id];
    const recipeId = prodStep.recipe;
    const recipe = recipes.map[recipeId];
    if (!recipe) return null;
    const byProducts = [...recipe.product];
    const idx = byProducts.findIndex(recipe => recipe.item === prodStep.product.item);
    const product = byProducts.splice(idx, 1)[0];
    if (!product) return null;
    const ratio = prodStep.product.amount / product.amount;
    return byProducts.map(product => ({ ...product, amount: product.amount * ratio }));
  };
};

export const getBuildingDetails = (id: string) => {
  return (state: RootState) => {
    const prodStep = state.entities.productionSteps.byId[id];
    if (!prodStep) return null;
    const recipe = recipes.map[prodStep.recipe];
    if (!recipe) return null;
    const building = buildings.map[recipe.building];

    const recipeProduct = recipe.product.find(
      product => product.item === prodStep.product.item
    );
    if (!recipeProduct) return;
    const count = prodStep.buildingCount;
    const overclock = (100 * prodStep.product.amount) / (count * recipeProduct.amount);
    const power = building.power * count * Math.pow(overclock / 100, building.powerExponent);
    return { building: building.name, power, count, overclock };
  };
};

export default {
  ...reducers,
};

function createProductionStep(productionStep: ProductionStepInit): ProductionStep {
  const { product } = productionStep;
  const id = nanoid();
  const itemData = items.map[product.item];
  // Pick first non-alternate recipe as default
  let recipe = itemData.recipes.filter(recipe => !recipe.alternate)[0]?.id;
  // If non-alternates do not exist (possibly turbofuel, compacted coal) then just pick first recipe
  if (!recipe) recipe = itemData.recipes[0]?.id;
  const edges = [] as string[];
  const ratio = getProductionRatio(recipe, product);
  const buildingCount = Math.ceil(ratio || 0);
  return {
    ...productionStep,
    id,
    product,
    edges,
    recipe,
    buildingCount,
  };
}

function getProductionRatio(recipeId: string, product: Ingredient): number | null {
  const recipe = recipes.map[recipeId];
  const recipeItem = recipe.product.find(product => product.item === product.item);
  if (!recipeItem) return null;
  return product.amount / recipeItem.amount;
}

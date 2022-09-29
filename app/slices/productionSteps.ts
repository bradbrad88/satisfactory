import { nanoid } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import type { EntityState } from "./entities";
import { items, recipes } from "data";

import type { Ingredient } from "data/recipes";

interface ProductionStepInit {
  product: Ingredient;
}

export interface ProductionStep {
  id: string;
  recipe: string;
  product: Ingredient;
  byProducts: Ingredient[];
  requiredInputs: Ingredient[];
  edges: string[];
  factory: string;
}

export const productionStepState = {
  productionSteps: { byId: {} as { [key: string]: ProductionStep }, allIds: [] as string[] },
};

const reducers = {
  createProductionStep: {
    reducer: (state: EntityState, action: { payload: ProductionStep }) => {
      const { id } = action.payload;
      const factory = state.factories.active;
      if (!factory) return;
      state.factories.byId[factory].productionSteps.push(id);
      action.payload.factory = factory;
      state.productionSteps.allIds.push(id);
      state.productionSteps.byId[id] = action.payload;
    },
    prepare: (props: ProductionStepInit) => {
      const { product } = props;
      const id = nanoid();
      const itemData = items.map[product.item];
      // Pick first non-alternate recipe as default
      let recipe = itemData.recipes.filter(recipe => !recipe.alternate)[0]?.id;
      // If non-alternates do not exist (possibly turbofuel, compacted coal) then just pick first recipe
      if (!recipe) recipe = itemData.recipes[0]?.id;
      const byProducts = [] as Ingredient[];
      const requiredInputs = [] as Ingredient[];
      const edges = [] as string[];

      return {
        payload: { id, product, edges, byProducts, requiredInputs, recipe } as ProductionStep,
      };
    },
  },
  updateRecipe: (
    state: EntityState,
    action: { payload: { productionStep: string; recipe: string } }
  ) => {
    const { productionStep, recipe } = action.payload;
    state.productionSteps.byId[productionStep].recipe = recipe;
  },
  updateProductQty: (
    state: EntityState,
    action: { payload: { productionStep: string; amount: number } }
  ) => {
    const { productionStep, amount } = action.payload;
    state.productionSteps.byId[productionStep].product.amount = amount;
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

export default {
  ...reducers,
};

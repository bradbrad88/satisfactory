import { nanoid } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { getDependantEdge, reducers as edgeReducers } from "./edges";
import { items, recipes, buildings } from "data";

import type { EntityState } from "./entities";
import type { Ingredient } from "data/recipes";
import type { Edge, EdgeOneSide } from "./edges";

interface ProductionStepInit {
  product: Ingredient;
  factory: string;
  location: { x: number; y: number };
  recipe?: string;
}

export interface ProductionStep {
  id: string;
  recipe: string;
  buildingCount: number;
  product: Ingredient;
  edges: string[];
  factory: string;
  location: { x: number; y: number };
}

export const productionStepState = {
  productionSteps: { byId: {} as { [key: string]: ProductionStep }, allIds: [] as string[] },
};

const reducers = {
  createProductionStep: {
    reducer: (state: EntityState, action: { payload: ProductionStep | null }) => {
      if (!action.payload) return;
      const { id, factory } = action.payload;
      state.factories.byId[factory].productionSteps.push(id);
      action.payload.factory = factory;
      state.productionSteps.allIds.push(id);
      state.productionSteps.byId[id] = action.payload;
      reducers.optimiseBuidingCount(state, { payload: id });
    },
    prepare: (props: ProductionStepInit): { payload: ProductionStep | null } => {
      const productionStep = createProductionStep(props);
      return {
        payload: productionStep,
      };
    },
  },
  createProductionStepAndLinkEdge: {
    reducer: (
      state: EntityState,
      action: { payload: { productionStep: ProductionStep; edge: Edge } | null }
    ) => {
      if (!action.payload) return;
      const { productionStep, edge } = action.payload;
      const { id, factory } = productionStep;
      state.productionSteps.byId[id] = productionStep;
      state.productionSteps.allIds.push(id);
      state.factories.byId[factory].productionSteps.push(id);
      edgeReducers.createEdge.reducer(state, { payload: edge });
    },
    prepare: (props: {
      productionStep: ProductionStepInit;
      edge: EdgeOneSide;
    }): {
      payload: {
        productionStep: ProductionStep;
        edge: Edge;
      } | null;
    } => {
      const productionStep = createProductionStep(props.productionStep);
      if (!productionStep) return { payload: null };

      // Find the empty edge - either input or output - and provide new
      // Apply new productionStep.id to the empty edge
      if (!props.edge.consumer) {
        props.edge.consumer = productionStep.id;
      }
      if (!props.edge.supplier) {
        props.edge.supplier = productionStep.id;
      }
      const edge = { ...props.edge, id: nanoid() } as Edge;
      return {
        payload: { productionStep, edge },
      };
    },
  },
  updateRecipe: (
    state: EntityState,
    action: { payload: { productionStep: string; recipe: string } }
  ) => {
    const { productionStep, recipe } = action.payload;
    state.productionSteps.byId[productionStep].recipe = recipe;
    reducers.optimiseBuidingCount(state, { payload: productionStep });
    // Handle edges
  },
  updateProductQty: (
    state: EntityState,
    action: {
      payload: { productionStep: string; amount: number; clearDependants?: boolean };
    }
  ) => {
    const { productionStep: id, amount } = action.payload;
    const productionStep = state.productionSteps.byId[id];
    productionStep.product.amount = amount;
    reducers.optimiseBuidingCount(state, { payload: id });

    // Get all edges related to the production step then split them into inputs and outputs
    const edges = productionStep.edges.map(id => state.edges.byId[id]);
    // This will gather edges that feed into the production step
    const inputs = edges.filter(edge => edge.consumer === id);
    // This will gather edges that distribute out from the production step
    const outputs = edges.filter(edge => edge.supplier === id);
    // Get the ratio - used against the original recipe to find new amount for each product
    const recipe = recipes.map[productionStep.recipe];
    const recipeItem = recipe.product.find(
      product => product.item === productionStep.product.item
    )!;
    const ratio = productionStep.product.amount / recipeItem.amount;

    // Responsible for handling how the new amounts for each item are distributed to each edge
    const processProduct = (
      edges: Edge[],
      amount: number,
      dependant: "CONSUMER" | "SUPPLIER"
    ) => {
      // Separate the dependants from the static
      // Static edges will remain constant - the dependant edges need to work around this.
      const dependantEdges = edges.filter(
        edge => edge.dependant && edge.dependant !== dependant
      );
      // If 0 dependants then exit
      if (!dependantEdges.length) return;
      const staticEdges = edges.filter(
        edge => !edge.dependant || edge.dependant === dependant
      );
      console.log(
        JSON.parse(JSON.stringify(dependantEdges)),
        JSON.parse(JSON.stringify(staticEdges))
      );
      // Find new input total
      let newAmount = amount;
      // Minus static edges
      staticEdges.forEach(edge => {
        newAmount -= edge.amount;
      });
      // Don't allow going into negatives. Imbalance is ok, but a production step going into negative qty is not
      if (newAmount < 0) newAmount = 0;
      // Distribute dependant edges equally
      // dependantEdges.sort(with limits first)
      dependantEdges.forEach((edge, idx) => {
        let amount = newAmount / (dependantEdges.length - idx); // Implement limits here
        newAmount -= amount;

        if (amount !== edge.amount) {
          edgeReducers.updateEdgeQty(state, {
            payload: { amount, id: edge.id },
          });
          reducers.assessProductAmount(state, {
            payload: getDependantEdge(edge)!,
          });
        }
      });
    };

    // Run processing function on ingredients
    recipe.ingredients.forEach(ingredient => {
      const edges = inputs.filter(edge => edge.item === ingredient.item);
      const amount = ingredient.amount * ratio;
      processProduct(edges, amount, "CONSUMER");
    });

    // Run processing function on products
    recipe.product.forEach(product => {
      const edges = outputs.filter(edge => edge.item === product.item);
      const amount = product.amount * ratio;
      processProduct(edges, amount, "SUPPLIER");
    });
  },
  assessProductAmount: (state: EntityState, action: { payload: string }) => {
    // Get production step
    const id = action.payload;
    const productionStep = state.productionSteps.byId[id];
    let maxAmount = 0;
    // Get an object describing recipe items that have dependants so we can process those particular edges
    const recipeItems = productionStep.edges
      .map(id => state.edges.byId[id])
      .filter(edge => edge.dependant)
      .reduce(
        (obj, edge) => {
          // If the current step is the dependant step in the edge
          if (getDependantEdge(edge) === id) {
            // Work out whether it's an input or output
            // If edge.dependant === "SUPPLIER" then we are looking at the input of the current step
            const io = edge.dependant === "SUPPLIER" ? "product" : "ingredients";
            obj[io][edge.item] = true;
          }
          return obj;
        },
        { ingredients: {}, product: {} } as {
          ingredients: { [key: string]: true };
          product: { [key: string]: true };
        }
      );
    const recipe = recipes.map[productionStep.recipe];
    const product = recipe.product.find(
      product => product.item === productionStep.product.item
    )!;
    // for each outputs get the recipe item amount and compare with maxAmount

    const processItems = (io: "ingredients" | "product") => {
      const edgeSide = io === "ingredients" ? "CONSUMER" : "SUPPLIER";
      Object.keys(recipeItems[io]).forEach(key => {
        const recipeItem = recipe[io].find(product => product.item === key);
        if (!recipeItem) return;
        // Get all edges related to this product/ingredient
        // Filter by item and where either consumer/supplier === id
        const edges = productionStep.edges
          .map(id => state.edges.byId[id])
          .filter(edge => edge.item === key && getDependantEdge(edge) === id);
        // Process the edges, starting with static, then limited, then dependants
        const dependantEdges = edges.filter(edge => edge.dependant === edgeSide);
        const staticEdges = edges.filter(edge => !edge.dependant);

        const reducer = (sum: number, edge: Edge) => edge.amount + sum;

        const itemAmount = dependantEdges.reduce(reducer, 0) + staticEdges.reduce(reducer, 0);

        // Turn the item amount (sum of edges) into productionStep product amount

        const ratio = itemAmount / recipeItem.amount;

        const amount = product.amount * ratio;
        // Compare against current max amount
        maxAmount = Math.max(maxAmount, amount);
      });
    };

    processItems("ingredients");
    processItems("product");

    // By this stage maxAmount will be our new product amount
    if (maxAmount !== productionStep.product.amount) {
      reducers.updateProductQty(state, {
        payload: { amount: maxAmount, productionStep: productionStep.id },
      });
      //
      const edges = productionStep.edges
        .map(id => state.edges.byId[id])
        .filter(
          edge =>
            edge.dependant &&
            edge[edge.dependant.toLowerCase() as "supplier" | "consumer"] !== id
        );
      edges.forEach(edge =>
        reducers.assessProductAmount(state, {
          payload: getDependantEdge(edge)!,
        })
      );
    }
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
  updateProductQtyToSumOfEdges: (state: EntityState, action: { payload: string }) => {
    const id = action.payload;
    const productionStep = state.productionSteps.byId[id];
    // Get the sum of edges pointing to the product
    const amount = productionStep.edges
      .map(id => state.edges.byId[id])
      .filter(
        edge =>
          edge.supplier === productionStep.id && edge.item === productionStep.product.item
      )
      .reduce((sum, edge) => sum + edge.amount, 0);
    reducers.updateProductQty(state, { payload: { productionStep: id, amount } });
  },
  updateLocation: (
    state: EntityState,
    action: { payload: { id: string; location: { x: number; y: number } } }
  ) => {
    const { id, location } = action.payload;
    state.productionSteps.byId[id].location = location;
  },
  destroyProductionStep: (state: EntityState, action: { payload: string }) => {
    const id = action.payload;
    const productionStep = state.productionSteps.byId[id];
    const edges = productionStep.edges;
    edgeReducers.destroyEdges(state, { payload: edges }); //
    const factory = productionStep.factory;
    const idx = state.productionSteps.allIds.indexOf(id);
    state.productionSteps.allIds.splice(idx, 1);
    delete state.productionSteps.byId[id];
    const facIdx = state.factories.byId[factory].productionSteps.indexOf(id);
    state.factories.byId[factory].productionSteps.splice(facIdx, 1);
  },
  destroyProductionSteps: (state: EntityState, action: { payload: string[] }) => {
    const ids = action.payload;
    while (ids.length > 0) {
      reducers.destroyProductionStep(state, { payload: ids[0] });
    }
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

function createProductionStep(productionStep: ProductionStepInit): ProductionStep | null {
  const { product } = productionStep;
  const id = nanoid();
  const itemData = items.map[product.item];
  let recipe = productionStep.recipe;
  // Pick first non-alternate recipe as default
  if (!recipe) recipe = itemData.createdBy.filter(recipe => !recipe.alternate)[0]?.id;
  // If non-alternates do not exist (possibly turbofuel, compacted coal) then just pick first recipe
  if (!recipe) recipe = itemData.createdBy[0]?.id;
  if (!recipe) return null;
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
  console.log(recipeId);
  const recipe = recipes.map[recipeId];
  const recipeItem = recipe.product.find(product => product.item === product.item);
  if (!recipeItem) return null;
  return product.amount / recipeItem.amount;
}

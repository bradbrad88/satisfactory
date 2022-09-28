import type { PayloadAction } from "@reduxjs/toolkit";
import type { EntityState } from "./entities";

interface Ingredient {
  item: string;
  qty: number;
}

interface ProductionStepInit {
  id: string;
  product: Ingredient;
  byProducts?: Ingredient[];
  requiredInputs?: Ingredient[];
  edges?: string[];
  factory: string;
}

export interface ProductionStep {
  id: string;
  recipe?: string;
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
  createProductionStep: (state: EntityState, action: PayloadAction<ProductionStepInit>) => {
    const transformProductionStep = (productionStep: ProductionStepInit) => {
      if (!productionStep.requiredInputs) productionStep.requiredInputs = [];
      if (!productionStep.byProducts) productionStep.byProducts = [];
      if (!productionStep.edges) productionStep.edges = [];
      return productionStep as ProductionStep;
    };
    const productionStep = transformProductionStep(action.payload);
    const { id } = productionStep;
    state.productionSteps.allIds.push(id);
    state.productionSteps.byId[id] = productionStep;
  },
  destroyProductionStep: (state: EntityState, action: { payload: string }) => {
    const id = action.payload;
    const idx = state.productionSteps.allIds.indexOf(id);
    delete state.productionSteps.byId[id];
    state.productionSteps.allIds.splice(idx, 1);
  },
  destroyProductionSteps: (state: EntityState, action: { payload: string[] }) => {
    const ids = action.payload;
    ids.forEach(id => {
      reducers.destroyProductionStep(state, { payload: id });
    });
  },
};

export default {
  ...reducers,
};

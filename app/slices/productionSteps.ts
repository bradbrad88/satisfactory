import { nanoid } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import type { EntityState } from "./entities";

interface Ingredient {
  item: string;
  qty: number;
}

interface ProductionStepInit {
  product: Ingredient;
}

export interface ProductionStep {
  id: string;
  recipe?: string;
  product: Ingredient;
  byProducts: Ingredient[];
  requiredInputs: Ingredient[];
  edges: string[];
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
      state.productionSteps.allIds.push(id);
      state.productionSteps.byId[id] = action.payload;
    },
    prepare: (props: ProductionStepInit) => {
      const { product } = props;
      const id = nanoid();
      const byProducts = [] as Ingredient[];
      const requiredInputs = [] as Ingredient[];
      const edges = [] as string[];
      return { payload: { id, product, edges, byProducts, requiredInputs } as ProductionStep };
    },
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

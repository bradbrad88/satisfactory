import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState, RootShape } from "app/store";

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

let initialState: RootShape<ProductionStep> = { byId: {}, allIds: [] };

if (typeof window !== "undefined") {
  initialState = JSON.parse(localStorage.getItem("productionStep") as string) || {
    byId: {},
    allIds: [],
  };
}

const slice = createSlice({
  name: "productionSteps",
  initialState,
  reducers: {
    createProductionStep(state, action: PayloadAction<ProductionStepInit>) {
      const transformProductionStep = (productionStep: ProductionStepInit) => {
        if (!productionStep.requiredInputs) productionStep.requiredInputs = [];
        if (!productionStep.byProducts) productionStep.byProducts = [];
        if (!productionStep.edges) productionStep.edges = [];
        return productionStep as ProductionStep;
      };
      const productionStep = transformProductionStep(action.payload);
      const { id } = productionStep;
      state.allIds.push(id);
      state.byId[id] = productionStep;
    },
    destroyProductionStep(state, action: PayloadAction<{ id: string; factory: string }>) {
      state.allIds = state.allIds.filter(id => id !== action.payload.id);
      delete state.byId[action.payload.id];
    },
  },
});

export const { createProductionStep, destroyProductionStep } = slice.actions;

export const selectBuildingSteps = (state: RootState, action: PayloadAction<string>) =>
  state.productionSteps.byId[action.payload];

export default slice.reducer;

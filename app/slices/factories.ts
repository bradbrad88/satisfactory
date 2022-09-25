import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState, RootShape } from "app/store";
import { createProductionStep, destroyProductionStep } from "./productionSteps";

interface Coordinate {
  x: number;
  y: number;
}

interface FactoryInit {
  id: string;
  name: string;
  location?: Coordinate;
  productionSteps?: string[];
}

interface Factory extends FactoryInit {
  location: Coordinate;
  productionSteps: string[];
}

let initialState: RootShape<Factory> = {
  byId: {},
  allIds: [],
};

if (typeof window !== "undefined") {
  initialState = JSON.parse(localStorage.getItem("factory") as string) || {
    byId: {},
    allIds: [],
  };
}

const slice = createSlice({
  name: "factories",
  initialState,
  reducers: {
    createFactory(state, action: PayloadAction<FactoryInit>) {
      state.allIds.push(action.payload.id);
      const transformFactory = (factory: FactoryInit) => {
        if (!factory.location) factory.location = { x: 0, y: 0 };
        if (!factory.productionSteps) factory.productionSteps = [];
        return factory as Factory;
      };
      const factory = transformFactory(action.payload);
      state.byId[action.payload.id] = factory;
    },
  },
  extraReducers(builder) {
    builder.addCase(createProductionStep, (state, action) => {
      const { factory, id } = action.payload;
      state.byId[factory].productionSteps.push(id);
    });
    builder.addCase(destroyProductionStep, (state, action) => {
      const { factory, id } = action.payload;
      const idx = state.byId[factory].productionSteps.findIndex(prodStep => prodStep === id);
      state.byId[factory].productionSteps.splice(idx, 1);
    });
  },
});

export const { createFactory } = slice.actions;

export const selectFactories = (state: RootState) => state.factories;

export default slice.reducer;

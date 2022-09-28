import { createSlice } from "@reduxjs/toolkit";
import ventures, { ventureState } from "./ventures";
import productionSteps, { productionStepState } from "./productionSteps";
import factories, { factoryState } from "./factories";
import edges, { edgeState } from "./edges";

const initialState = {
  ...ventureState,
  ...factoryState,
  ...productionStepState,
  ...edgeState,
};

const slice = createSlice({
  name: "entities",
  initialState,
  reducers: {
    ...ventures,
    ...factories,
    ...productionSteps,
    ...edges,
  },
});

export const { ...action } = { ...slice.actions };

export default slice.reducer;

export type EntityState = typeof initialState;

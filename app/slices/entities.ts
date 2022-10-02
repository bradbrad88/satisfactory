import { createSlice } from "@reduxjs/toolkit";
import store, { RootState } from "app/store";
import ventures, { ventureState } from "./ventures";
import factories, { factoryState } from "./factories";
import productionSteps, { productionStepState } from "./productionSteps";
import edges, { edgeState } from "./edges";
import { setLoaded } from "./ui";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  ...ventureState,
  ...factoryState,
  ...productionStepState,
  ...edgeState,
};

export type EntityState = typeof initialState;

const slice = createSlice({
  name: "entities",
  initialState,
  reducers: {
    loadEntities: (state: any, action: PayloadAction<EntityState>) => {
      const { edges, factories, productionSteps, ventures } = action.payload;
      state.edges = edges;
      state.factories = factories;
      state.productionSteps = productionSteps;
      state.ventures = ventures;
    },
    ...ventures,
    ...factories,
    ...productionSteps,
    ...edges,
  },
});

export async function fetchSavedFiles(dispatch: Dispatch, getState: any) {
  // Prevent trying to load from localstorage
  const initialState = getState();
  if (initialState.ui.loaded) return;

  try {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("satisfactory") as string;
      const entities = JSON.parse(data);
      dispatch(action.loadEntities(entities));
    }
  } catch (error) {}

  const newState = getState();
  if (newState.ui.loaded) return;
  dispatch(setLoaded());
  store.subscribe(() => {
    const state = store.getState() as RootState;
    if (typeof window !== "undefined")
      localStorage?.setItem("satisfactory", JSON.stringify(state.entities));
  });
}

export const { ...action } = { ...slice.actions };

export default slice.reducer;

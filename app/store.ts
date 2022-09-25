import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productionSteps from "./slices/productionSteps";
import factories from "./slices/factories";
import recipes from "./slices/recipes";
import edges from "./slices/edges";

const store = configureStore({
  reducer: {
    productionSteps,
    factories,
    recipes,
    edges,
  },
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export type RootShape<T> = { byId: { [key: string]: T }; allIds: string[] };

export default store;

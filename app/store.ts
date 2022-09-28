import { configureStore } from "@reduxjs/toolkit";
import entities from "./slices/entities";

const store = configureStore({
  reducer: {
    entities,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import entities from "./slices/entities";
import ui from "./slices/ui";

const store = configureStore({
  reducer: {
    entities,
    ui,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;

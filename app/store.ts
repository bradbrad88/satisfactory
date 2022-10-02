import { configureStore } from "@reduxjs/toolkit";
import entities from "./slices/entities";
import ui from "./slices/ui";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
  reducer: {
    entities,
    ui,
  },
  middleware: gMW => gMW().concat(thunkMiddleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;

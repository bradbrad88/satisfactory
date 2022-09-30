import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface Drag {
  type: "input" | "output";
  amount: number;
  id: string;
  item: string;
}

const initialState = {
  drag: null as Drag | null,
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    dragElement: (state: UI, action: { payload: Drag | null }) => {
      state.drag = action.payload;

      // prepare: () => {
      //   return { payload: {} };
      // },
    },
  },
});

export const { dragElement } = slice.actions;
export default slice.reducer;
export type UI = typeof initialState;

export const getDragElement = (state: RootState) => {
  return state.ui.drag;
};

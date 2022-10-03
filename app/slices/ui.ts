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
  loaded: false,
  mapScale: 1,
  mapBoundingRect: { left: 0, top: 0, height: 0, width: 0 },
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    dragElement: (state: UI, action: { payload: Drag | null }) => {
      state.drag = action.payload;
    },
    setLoaded: (state: UI) => {
      state.loaded = true;
    },
    setMapScale: (state: UI, action: { payload: number }) => {
      state.mapScale = action.payload;
    },
    setMapBoundingRect: (
      state: UI,
      action: { payload: { left: number; top: number; height: number; width: number } }
    ) => {
      console.log("Setting bounding rect in redux");
      state.mapBoundingRect = action.payload;
    },
  },
});

export const { dragElement, setLoaded, setMapScale, setMapBoundingRect } = slice.actions;
export default slice.reducer;
export type UI = typeof initialState;

export const getDragElement = (state: RootState) => {
  return state.ui.drag;
};

export const getMapDetails = (state: RootState) => {
  const mapScale = state.ui.mapScale;
  const mapBoundingRect = state.ui.mapBoundingRect || {};
  return { ...mapBoundingRect, mapScale };
};

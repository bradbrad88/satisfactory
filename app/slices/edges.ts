import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootShape } from "app/store";

interface Edge {
  input: string;
  output: string;
  qty: number;
  locked: boolean;
  dependant?: "input" | "output";
}

let initialState: RootShape<Edge> = {
  byId: {},
  allIds: [],
};

const slice = createSlice({
  name: "edges",
  initialState,
  reducers: {},
});

export default slice.reducer;

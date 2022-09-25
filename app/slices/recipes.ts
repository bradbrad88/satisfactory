import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "app/store";
import { recipes } from "data/index";
import type { Recipe } from "data/index";

const slice = createSlice({
  name: "recipes",
  initialState: recipes,
  reducers: {},
});

export const selectRecipe = (state: RootState, action: PayloadAction<string>) => state.recipes;

export default slice.reducer;

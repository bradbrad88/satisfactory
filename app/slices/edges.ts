import { nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { EntityState } from "./entities";
import { RootState } from "app/store";
import productionStepsReducers from "./productionSteps";

interface EdgeInit {
  input: string;
  output: string;
  qty: number;
}

interface Edge {
  input: string;
  output: string;
  qty: number;
  locked: boolean;
  dependant?: "input" | "output";
}

export const edgeState = {
  edges: {
    byId: {} as { [key: string]: Edge },
    allIds: [] as string[],
  },
};

export const reducers = {
  createEdge: (state: EntityState, action: { payload: EdgeInit }) => {},
};

export default {
  ...reducers,
};

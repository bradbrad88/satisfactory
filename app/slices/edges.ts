import { nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { EntityState } from "./entities";
import { RootState } from "app/store";
import productionStepsReducers from "./productionSteps";

type InputOrOutput = { input: string; output?: string } | { input?: string; output: string };

export type EdgeOneSide = {
  amount: number;
  item: string;
  dependant?: string;
} & InputOrOutput;

export interface EdgeInit {
  id?: string;
  input: string;
  output: string;
  amount: number;
  item: string;
  dependant?: string;
}

export interface Edge {
  id: string;
  input: string;
  output: string;
  amount: number;
  item: string;
  dependant?: string;
}

export const edgeState = {
  edges: {
    byId: {} as { [key: string]: Edge },
    allIds: [] as string[],
  },
};

export const reducers = {
  createEdge: {
    reducer: (state: EntityState, action: { payload: Edge }) => {
      const { input, output, id } = action.payload;
      state.productionSteps.byId[input].edges.push(id);
      state.productionSteps.byId[output].edges.push(id);
      state.edges.byId[id] = action.payload;
      state.edges.allIds.push(id);
    },
    prepare: (edge: EdgeInit): { payload: Edge } => {
      const newEdge = { ...edge, id: edge.id || nanoid() };
      return { payload: newEdge };
    },
  },
};

export default {
  ...reducers,
};

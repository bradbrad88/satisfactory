import { nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { EntityState } from "./entities";
import { RootState } from "app/store";
import productionStepsReducers from "./productionSteps";

type InputOrOutput = { input: string; output?: string } | { input?: string; output: string };

// For the use-case where an edge and productionStep are created at the same time
// All edges require both input and output to be valid but sometimes won't know a particular id until action prep.
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

// Rather than treat input and output as relative to the edge, we're treating them as relative to where they're coming/going from

export interface Edge {
  id: string;
  // edge points to this productionStep's input
  input: string;
  // edge points to this productionStep's output
  output: string;
  amount: number;
  item: string;
  dependant?: string;
}

// Output of this PS ---------------------------- Goes to input of this PS
// productionStep.output => {output} edge {input} => productionStep.input

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
  updateEdgeQty: (state: EntityState, action: { payload: { id: string; amount: number } }) => {
    const { id, amount } = action.payload;
    const edge = state.edges.byId[id];
    edge.amount = amount;
    if (edge.dependant) {
      productionStepsReducers.updateProductQtyToSumOfEdges(state, { payload: edge.dependant });
    }
  },
};

export default {
  ...reducers,
};

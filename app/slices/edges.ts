import { nanoid } from "@reduxjs/toolkit";
import type { EntityState } from "./entities";
import productionStepsReducers from "./productionSteps";

type InputOrOutput =
  | { consumer: string; supplier?: string }
  | { consumer?: string; supplier: string };

// For the use-case where an edge and productionStep are created at the same time
// All edges require both input and output to be valid but sometimes won't know a particular id until action prep.
export type EdgeOneSide = {
  amount: number;
  item: string;
  dependant?: string;
} & InputOrOutput;

export interface EdgeInit {
  id?: string;
  item: string;
  consumer: string;
  supplier: string;
  amount: number;
  dependant?: string;
}

// Rather than treat input and output as relative to the edge, we're treating them as relative to where they're coming/going from

export interface Edge {
  id: string;
  // edge points to this productionStep's input
  consumer: string;
  // edge points to this productionStep's output
  supplier: string;
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
      const { supplier, consumer, id } = action.payload;
      state.productionSteps.byId[consumer].edges.push(id);
      state.productionSteps.byId[supplier].edges.push(id);
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
  destroyEdge: (state: EntityState, action: { payload: string }) => {
    const id = action.payload;
    const edge = state.edges.byId[id];
    const edges = state.edges.allIds;
    const removeEdge = (productionStepId: string) => {
      if (!productionStepId) return;
      const productionStep = state.productionSteps.byId[productionStepId];
      const edges = productionStep.edges;
      const idx = edges.indexOf(id);
      edges.splice(idx, 1);
    };
    removeEdge(edge.supplier);
    removeEdge(edge.consumer);

    const idx = edges.indexOf(id);
    edges.splice(idx, 1);
    delete state.edges.byId[id];
  },
  destroyEdges: (state: EntityState, action: { payload: string[] }) => {
    const edges = action.payload;
    while (edges.length > 0) {
      reducers.destroyEdge(state, { payload: edges[0] });
    }
  },
};

export default {
  ...reducers,
};

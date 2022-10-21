import { nanoid } from "@reduxjs/toolkit";
import { RootState } from "app/store";
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
  dependant?: "SUPPLIER" | "CONSUMER";
} & InputOrOutput;

export interface EdgeInit {
  id?: string;
  item: string;
  consumer: string;
  supplier: string;
  amount: number;
  dependant?: "SUPPLIER" | "CONSUMER";
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
  updateEdgeQtyAndCalculateProdStepEdges: (
    state: EntityState,
    action: { payload: { id: string; amount: number; clearDependant?: true } }
  ) => {
    const { id, clearDependant } = action.payload;
    const edge = state.edges.byId[id];
    reducers.updateEdgeQty(state, action);
    if (clearDependant) edge.dependant = undefined;
    productionStepsReducers.assessProductAmount(state, { payload: edge.supplier });
    productionStepsReducers.calculateEdges(state, { payload: edge.consumer });
  },
  updateEdgeQty: (state: EntityState, action: { payload: { id: string; amount: number } }) => {
    const { id, amount } = action.payload;
    const edge = state.edges.byId[id];
    edge.amount = amount;
  },
  createDependancy: {
    reducer: (
      state: EntityState,
      action: {
        payload: Edge;
      }
    ) => {
      const { item, supplier, consumer, dependant, amount } = action.payload;
      // Find an edge that matches the same item, supplier and consumer
      // Qty and dependant may be different

      const supplierStep = state.productionSteps.byId[supplier];
      const existingEdge = supplierStep.edges
        .map(id => state.edges.byId[id])
        .find(
          edge =>
            edge.consumer === consumer && edge.supplier === supplier && edge.item === item
        );

      if (!existingEdge) {
        reducers.createEdge.reducer(state, action);
      } else {
        existingEdge.dependant = dependant;
        existingEdge.amount = amount;
      }
      // If we can't find one, create one with id provided
    },
    prepare: (edge: EdgeInit): { payload: Edge } => {
      const id = nanoid();
      return { payload: { ...edge, id } };
    },
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

export function getDependantEdge(edge: Edge) {
  if (!edge.dependant) return null;
  return edge[edge.dependant.toLowerCase() as "consumer" | "supplier"];
}

export function getFactoryEdges(factoryId: string) {
  return (state: RootState) => {
    // Get factory data
    const factory = state.entities.factories.byId[factoryId];
    // Return null as edge case for factory not found
    if (!factory) return null;

    // Create unique set of edge ids
    const edgeSet = factory.productionSteps
      .map(id => state.entities.productionSteps.byId[id])
      .reduce((set, productionStep) => {
        productionStep.edges.forEach(edge => {
          set.add(edge);
        });
        return set;
      }, new Set<string>());
    return Array.from(edgeSet) as string[];
  };
}

export function getEdge(id: string) {
  return (state: RootState) => {
    return state.entities.edges.byId[id];
  };
}

export function getIOEdges({
  productionStepId,
  io,
  item,
}: {
  productionStepId: string;
  io: "consumer" | "supplier";
  item: string;
}) {
  return (state: RootState) => {
    const productionStep = state.entities.productionSteps.byId[productionStepId];
    const edges = productionStep.edges.map(id => state.entities.edges.byId[id]);
    const filteredEdges = edges.filter(
      edge => edge[io] === productionStepId && edge.item === item
    );
    return filteredEdges;
  };
}

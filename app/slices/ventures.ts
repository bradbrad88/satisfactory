import { nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { EntityState } from "./entities";
import factories from "./factories";

export interface VentureInit {
  name: string;
}

export interface Venture {
  id: string;
  name: string;
  factories: string[];
}

export const ventureState = {
  ventures: {
    byId: {} as { [key: string]: Venture },
    allIds: [] as string[],
    active: null as string | null,
  },
};

const reducers = {
  // CREATE A VENTURE
  createVenture: {
    reducer: (state: EntityState, action: PayloadAction<Venture>) => {
      const { id } = action.payload;
      state.ventures.byId[id] = action.payload;
      state.ventures.allIds.push(id);
      reducers.setActiveVenture(state, { payload: id });
    },
    prepare: (venture: VentureInit) => {
      const id = nanoid();
      const factories: string[] = [];
      return { payload: { ...venture, id, factories } };
    },
  },

  setActiveVenture: (state: EntityState, action: { payload: string | null }) => {
    state.ventures.active = action.payload;
  },

  // DELETE VENTURES
  deleteVenture: (state: EntityState, action: PayloadAction<string>) => {
    const id = action.payload;
    // Delete all ventures

    const venture = state.ventures.byId[id];
    factories.destroyFactories(state, { payload: venture.factories });
    const idx = state.ventures.allIds.indexOf(id);
    state.ventures.allIds.splice(idx, 1);
    delete state.ventures.byId[id];
  },
};

export default {
  ...reducers,
};

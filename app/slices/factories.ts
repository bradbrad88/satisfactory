import { nanoid, PayloadAction } from "@reduxjs/toolkit";
import type { EntityState } from "./entities";
import { RootState } from "app/store";
import productionStepsReducers from "./productionSteps";

interface Coordinate {
  x: number;
  y: number;
}

interface FactoryInit {
  name: string;
  venture: string;
}

interface Factory {
  id: string;
  name: string;
  location: Coordinate;
  productionSteps: string[];
  venture: string;
}

export const factoryState = {
  factories: {
    byId: {} as { [key: string]: Factory },
    allIds: [] as string[],
    active: null as string | null,
  },
};

export const reducers = {
  createFactory: {
    reducer: (state: EntityState, action: PayloadAction<Factory>) => {
      const { id, venture } = action.payload;
      state.factories.allIds.push(id);
      state.factories.byId[id] = action.payload;
      state.ventures.byId[venture].factories.push(id);
    },
    prepare: (factory: FactoryInit): { payload: Factory } => {
      const id = nanoid();
      const location = { x: 0, y: 0 };
      const productionSteps = [] as string[];
      return {
        payload: { ...factory, id, location, productionSteps },
      };
    },
  },
  setActiveFactory: (state: EntityState, action: PayloadAction<string | null>) => {
    state.factories.active = action.payload;
  },
  destroyFactory: (state: EntityState, action: { payload: string }) => {
    // Get factory id to delete
    const id = action.payload || state.factories.active;
    if (!id) return;
    const factory = state.factories.byId[id];
    // Get associated production steps to be removed as well
    const { productionSteps: ids } = state.factories.byId[id];
    productionStepsReducers.destroyProductionSteps(state, { payload: ids });

    // Find the index of factory id in allIds[] so it can be deleted
    const idx = state.factories.allIds.indexOf(id);
    state.factories.allIds.splice(idx, 1);

    // Delete from byId{}
    delete state.factories.byId[id];

    // Remove from venture.factories
    const ventureFactories = state.ventures.byId[factory.venture].factories;
    const venIdx = ventureFactories.indexOf(id);
    ventureFactories.splice(venIdx, 1);

    // If factory was active, then remove it from factories.active
    if (id === state.factories.active) state.factories.active = null;
  },
  destroyFactories: (state: EntityState, action: { payload: string[] }) => {
    const factories = action.payload;

    while (factories.length > 0) {
      reducers.destroyFactory(state, { payload: factories[0] });
    }
  },
};

export default {
  ...reducers,
};

export const getFactories = (state: RootState) => {
  const venture = state.entities.ventures.active;
  if (!venture) return [];
  return state.entities.ventures.byId[venture].factories;
};

export const getActiveFactory = (state: RootState) => {
  return state.entities.factories.active;
};

export const getFactory = (factory: string) => {
  return (state: RootState) => state.entities.factories.byId[factory];
};

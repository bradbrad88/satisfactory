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
  // venture: string;
}

interface Factory {
  id: string;
  name: string;
  location: Coordinate;
  productionSteps: string[];
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
      const { id } = action.payload;
      const venture = state.ventures.active;
      if (!venture) return;
      state.factories.allIds.push(id);
      state.factories.byId[id] = action.payload;
      state.ventures.byId[venture].factories.push(id);
    },
    prepare: (factory: FactoryInit) => {
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
  destroyFactroy: (state: EntityState, action: PayloadAction<string>) => {
    const id = action.payload;

    const { productionSteps: ids } = state.factories.byId[id];
    productionStepsReducers.destroyProductionSteps(state, { payload: ids });

    const idx = state.factories.allIds.indexOf(id);
    state.factories.allIds.splice(idx, 1);

    delete state.factories.byId[id];
  },
  destroyFactories: (state: EntityState, action: { payload: string[] }) => {
    action.payload.forEach(id => {
      reducers.destroyFactroy(state, { payload: id, type: "" });
    });
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

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { getFactoryEdges } from "./edges";

interface Drag {
  type: "consumer" | "supplier";
  amount: number;
  id: string;
  item: string;
}

export interface Location {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface EdgeLocation {
  [key: string]: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}

interface IOMap {
  [key: string]: EdgeLocation;
}

const initialState = {
  drag: null as Drag | null,
  loaded: false,
  mapScale: 1,
  mapScalingRect: { top: 0, left: 0, width: 0, height: 0 },
  mapFrameRect: { top: 0, left: 0, width: 0, height: 0 },
  ioMap: {} as IOMap,
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    dragElement: (state: UI, action: { payload: Drag | null }) => {
      state.drag = action.payload;
    },
    setLoaded: (state: UI) => {
      state.loaded = true;
    },
    setMapScale: (state: UI, action: { payload: number }) => {
      state.mapScale = action.payload;
    },
    setMapScalingRect: (state: UI, action: { payload: Location }) => {
      state.mapScalingRect = action.payload;
    },
    setMapFrameRect: (state: UI, action: { payload: Location }) => {
      state.mapFrameRect = action.payload;
    },
    updateIOLocation: (
      state: UI,
      action: { payload: { edge: string; productionStep: string; location: Location } }
    ) => {
      const { edge, location, productionStep } = action.payload;
      const { height, left, top, width } = location;
      const { left: scalingLeft, top: scalingTop } = state.mapScalingRect;
      const scale = state.mapScale;
      const relativeLocation = {
        width: width / scale,
        height: height / scale,
        top: (top - scalingTop) / scale,
        left: (left - scalingLeft) / scale,
      };
      if (!state.ioMap[productionStep]) state.ioMap[productionStep] = {};
      state.ioMap[productionStep][edge] = relativeLocation;
    },
  },
});

export const {
  dragElement,
  setLoaded,
  setMapScale,
  setMapScalingRect,
  setMapFrameRect,
  updateIOLocation,
} = slice.actions;

export default slice.reducer;

export type UI = typeof initialState;

export const getDragElement = (state: RootState) => {
  return state.ui.drag;
};

export const getMapDetails = (state: RootState) => {
  const mapScale = state.ui.mapScale;
  const mapBoundingRect = state.ui.mapScalingRect || {};
  return { ...mapBoundingRect, mapScale };
};

export const getMapFrame = (state: RootState) => {
  const { height, left, top, width } = state.ui.mapFrameRect;
  return { height, left, top, width };
};

// Get connecting lines between edges based on the segment of map the canvas has in view
export const getConnectionLines = (factoryId: string | null) => {
  return (state: RootState) => {
    if (!factoryId) return [];
    const edges = getFactoryEdges(factoryId)(state)?.map(id => state.entities.edges.byId[id]);
    if (!edges) return [];
    const mapLocation = getMapLocation(state.ui.mapFrameRect, state.ui.mapScalingRect);
    const scale = state.ui.mapScale;
    return edges.reduce((arr, edge) => {
      const supplier = state.ui.ioMap[edge.supplier];
      if (!supplier || !supplier[edge.id]) return arr;
      const pointStart = translatePoint(supplier[edge.id], mapLocation, scale);

      const consumer = state.ui.ioMap[edge.consumer];
      if (!consumer || !consumer[edge.id]) return arr;
      const pointEnd = translatePoint(consumer[edge.id], mapLocation, scale);

      const connection = [pointStart, pointEnd] as [Location, Location];
      arr.push(connection);

      return arr;
    }, [] as [Location, Location][]);
  };
};

function translatePoint(point: Location, mapLocation: Location, scale: number): Location {
  const { height, left, top, width } = point;

  return {
    height: height * scale,
    left: mapLocation.left + left * scale,
    top: mapLocation.top + top * scale,
    width: width * scale,
  };
}

function getMapLocation(mapFrame: Location, mapScaling: Location): Location {
  const { width, height } = mapScaling;
  const left = mapScaling.left - mapFrame.left;
  const top = mapScaling.top - mapFrame.top;
  return { left, top, width, height };
}

export const getEdgePosition = (id: string) => {
  return (state: RootState) => {
    const dfault = { x: 0, y: 0 };
    const edge = state.entities.edges.byId[id];
    const supplierId = state.entities.productionSteps.byId[edge.supplier].id;
    const consumerId = state.entities.productionSteps.byId[edge.consumer].id;
    const supplier = state.ui.ioMap[supplierId];
    if (!supplier || !supplier[id]) return dfault;

    const { width: sWidth, height: sHeight, left: sLeft, top: sTop } = supplier[id];
    const consumer = state.ui.ioMap[consumerId];
    if (!consumer || !consumer[id]) return dfault;
    const { width: cWidth, height: cHeight, left: cLeft, top: cTop } = consumer[id];
    const x = (sLeft + sWidth / 2 + cLeft + cWidth / 2) / 2;
    const y = (sTop + sHeight / 2 + cTop + cHeight / 2) / 2;
    return { x, y };
  };
};

export const getEdgeCentrePosition = (edgeId: string) => {
  return (state: RootState) => {
    const edge = state.entities.edges.byId[edgeId];
    const scale = state.ui.mapScale;
    const { height, left, top, width } = state.ui.mapScalingRect;

    const supplier = state.ui.ioMap[edge.supplier];
    const dfault = { x: 0, y: 0 };
    if (!supplier) return dfault;
    const supplierPosition = supplier[edgeId];
    const consumer = state.ui.ioMap[edge.consumer];
    if (!consumer) return dfault;
    const consumerPosition = consumer[edgeId];
    if (!supplierPosition || !consumerPosition) return dfault;
    const supplierX =
      (supplierPosition.left - left + (supplierPosition.width * scale) / 2) / scale;
    const supplierY =
      (supplierPosition.top - top + (supplierPosition.height * scale) / 2) / scale;
    const consumerX =
      (consumerPosition.left - left + (consumerPosition.width * scale) / 2) / scale;
    const consumerY =
      (consumerPosition.top - top + (consumerPosition.height * scale) / 2) / scale;

    const location = {
      x: (consumerX + supplierX) / 2,
      y: (consumerY + supplierY) / 2,
    };

    return location;
  };
};

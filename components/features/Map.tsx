import React, { useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getMapDetails, setMapScalingRect, setMapFrameRect, setMapScale } from "app/slices/ui";

interface Proptypes {
  children: React.ReactNode;
}

const Map = ({ children }: Proptypes) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const mouseInitPosition = useRef({ x: 0, y: 0 });
  const offsetInitPosition = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);
  // Used for getting the size of the map and canvas elements - map being the container, canvas the floating element, transform ref to get boundingRect after scaling
  const mapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const transformingRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const mapDetails = useAppSelector(getMapDetails, shallowEqual);
  const mapDetailsRef = useRef(mapDetails);
  mapDetailsRef.current = mapDetails;
  const { top, left, mapScale } = mapDetailsRef.current;

  const centreCanvas = useCallback(() => {
    if (!canvasRef.current || !mapRef.current) return;
    const { width: canvasWidth, height: canvasHeight } =
      canvasRef.current.getBoundingClientRect();
    const { width: mapWidth, height: mapHeight } = mapRef.current.getBoundingClientRect();
    const x = (canvasWidth - mapWidth) / -2;
    const y = (canvasHeight - mapHeight) / -2;
    setOffset({ x, y });
  }, []);

  useEffect(() => {
    // Get screen size
    centreCanvas();
  }, []);

  useEffect(() => {
    function onResize() {
      if (!mapRef.current) return;
      const { height, left, top, width } = mapRef.current?.getBoundingClientRect();
      dispatch(setMapFrameRect({ height, left, top, width }));
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!transformingRef.current) return;
    const clientRect = transformingRef.current.getBoundingClientRect();
    if (left !== clientRect.left || top !== clientRect.top) {
      const { top, left, width, height } = clientRect;
      dispatch(setMapScalingRect({ top, left, width, height }));
    }
  });

  const pointerMove = useCallback((e: PointerEvent) => {
    if (!dragging.current) return;
    if (!mapRef.current || !canvasRef.current) return;
    const { x, y } = mouseInitPosition.current;
    const { x: xInit, y: yInit } = offsetInitPosition.current;
    // Put limits on x and y so we don't lose the canvas
    const { width: canvasWidth, height: canvasHeight } =
      canvasRef.current.getBoundingClientRect();
    const { width: mapWidth, height: mapHeight } = mapRef.current.getBoundingClientRect();
    let offsetX = xInit + e.clientX - x;
    let offsetY = yInit + e.clientY - y;
    const xUpperBound = mapWidth / 2;
    const xLowerBound = mapWidth / 2 - canvasWidth;
    const yUpperBound = mapHeight / 2;
    const yLowerBound = mapHeight / 2 - canvasHeight;
    if (offsetX > xUpperBound) {
      offsetX = xUpperBound;
    }
    if (offsetX < xLowerBound) {
      offsetX = xLowerBound;
    }
    if (offsetY > yUpperBound) {
      offsetY = yUpperBound;
    }
    if (offsetY < yLowerBound) {
      offsetY = yLowerBound;
    }
    setOffset({
      x: offsetX,
      y: offsetY,
    });
  }, []);

  const pointerUp = useCallback((e: PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", pointerMove);
    window.addEventListener("pointerup", pointerUp);
    return () => {
      window.removeEventListener("pointerup", pointerUp);
      window.removeEventListener("pointermove", pointerMove);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    mouseInitPosition.current = { x: e.clientX, y: e.clientY };
    offsetInitPosition.current = offset;
    dragging.current = true;
  };

  const onWheel = (e: React.WheelEvent) => {
    const step = 0.01;
    const { deltaY } = e;
    const direction = deltaY < 0 ? 1 : -1;
    let newZoom = step * direction + mapScale;
    if (newZoom > 1) newZoom = 1;
    if (newZoom < 0.4) newZoom = 0.4;
    dispatch(setMapScale(newZoom));
  };

  const outterStyle: React.CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
  };

  const innerStyle: React.CSSProperties = {
    transform: `scale(${mapScale})`,
  };

  return (
    // Static frame
    <div ref={mapRef} className="relative w-full h-full overflow-hidden" onWheel={onWheel}>
      {/* Motion canvas */}
      <div
        ref={canvasRef}
        style={outterStyle}
        className="w-fit h-fit p-96 bg-zinc-800 border-dashed  border-2 border-zinc-600 "
        onPointerDown={onPointerDown}
      >
        {/* Canvas without padding */}
        <div className="relative w-full h-full">
          <div ref={transformingRef} className="relative" style={innerStyle}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

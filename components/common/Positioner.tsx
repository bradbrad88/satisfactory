import { useCallback, useEffect, useRef, useState } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getMapDetails } from "app/slices/ui";
import classnames from "classnames";

interface Payload {
  id: string;
  location: { x: number; y: number };
}

interface Proptypes<P> {
  children: React.ReactNode;
  id: string;
  x: number;
  y: number;
  updater?: ActionCreatorWithPayload<Payload>;
}

const Positioner = <P extends {}>({ children, id, x, y, updater }: Proptypes<P>) => {
  const [dragging, setDragging] = useState(false);
  // Required to calculate on current dragging position
  const draggingRef = useRef(dragging);
  // Distance between productionStep top-left corner and where pointer clicked
  const mouseOffset = useRef({ x: 0, y: 0 });
  const mapDetails = useAppSelector(getMapDetails);
  const mapDetailsRef = useRef(mapDetails);
  const dispatch = useAppDispatch();

  mapDetailsRef.current = mapDetails;
  draggingRef.current = dragging;

  const onPointerUpGlobal = useCallback((e: PointerEvent) => {
    if (draggingRef.current) setDragging(false);
  }, []);

  const onPointerUp: React.PointerEventHandler = useCallback(
    e => {
      if (!draggingRef.current) return;
      const { x: offsetX, y: offsetY } = mouseOffset.current;
      const { left, top, mapScale: scale } = mapDetailsRef.current;
      const newX = (e.clientX - left) / scale - offsetX;
      const newY = (e.clientY - top) / scale - offsetY;
      if (typeof updater === "function")
        dispatch(updater({ id, location: { x: newX, y: newY } }));
    },
    [mouseOffset.current, mapDetailsRef.current]
  );

  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUpGlobal);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUpGlobal);
    };
  }, []);

  function onPointerMove(e: PointerEvent) {
    if (!draggingRef.current) return;
    e.stopPropagation();
    const { left: mapX, top: mapY, mapScale: scale } = mapDetailsRef.current;
    const { x: offsetX, y: offsetY } = mouseOffset.current;
    const newX = (e.clientX - mapX) / scale - offsetX;
    const newY = (e.clientY - mapY) / scale - offsetY;
    if (typeof updater === "function")
      dispatch(updater({ id, location: { x: newX, y: newY } }));
  }

  const onPointerDown: React.PointerEventHandler = e => {
    e.stopPropagation();
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const { mapScale: scale } = mapDetailsRef.current;
    mouseOffset.current = {
      x: (e.clientX - left) / scale,
      y: (e.clientY - top) / scale,
    };
    setDragging(true);
  };

  const style: React.CSSProperties = {
    left: x,
    top: y,
    width: 1,
    height: 1,
  };

  const classes = classnames("absolute", "cursor-grab", {
    "cursor-grabbing": dragging,
    "cursor-grab": !dragging,
  });

  return (
    <div
      style={style}
      className={classes}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {children}
    </div>
  );
};

export default Positioner;

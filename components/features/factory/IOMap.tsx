import { useEffect, useRef } from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "app/hooks";
import { getConnectionLines, getMapFrame } from "app/slices/ui";
import Canvas from "components/common/Canvas";

import type { Location } from "app/slices/ui";

interface Proptypes {
  factory: string | null;
}

const IOMap = ({ factory }: Proptypes) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { height, width } = useAppSelector(getMapFrame, shallowEqual);
  const connectingLines = useAppSelector(getConnectionLines(factory));

  useEffect(() => {
    if (!ref.current) return;
    const ctx = ref.current.getContext("2d")!;
    ctx.clearRect(0, 0, width, height);
    connectingLines?.forEach(duo => {
      drawConnectingLine(duo, ctx!);
    });
  });

  function drawConnectingLine(
    [item1, item2]: [Location, Location],
    ctx: CanvasRenderingContext2D
  ) {
    if (!item1 || !item2) return;
    const pointStartX = item1.left + item1.width / 2;
    const pointStartY = item1.top + item1.height / 2;
    const pointEndX = item2.left + item2.width / 2;
    const pointEndY = item2.top + item2.height / 2;
    ctx.beginPath();
    ctx.moveTo(pointStartX, pointStartY);
    ctx.lineTo(pointEndX, pointEndY);
    ctx.strokeStyle = "rgb(255,255,255,0.1)";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.clearRect(item1.left, item1.top, item1.width, item1.height);
    ctx.clearRect(item2.left, item2.top, item2.width, item2.height);
  }

  return (
    <div className="absolute w-full h-full top-0 left-0 pointer-events-none touch-none">
      <div className="relative h-full w-full">
        <Canvas
          ref={ref}
          height={height}
          className={"bg-red-5000 bg-opacity-25 h-full w-full pointer-events-none"}
          width={width}
        />
      </div>
    </div>
  );
};

export default IOMap;

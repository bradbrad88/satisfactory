import { forwardRef } from "react";

const Canvas = forwardRef(
  (
    props: React.CanvasHTMLAttributes<HTMLCanvasElement>,
    ref: React.ForwardedRef<HTMLCanvasElement>
  ) => {
    return <canvas ref={ref} {...props} />;
  }
);

export default Canvas;

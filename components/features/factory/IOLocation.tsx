import { useLayoutEffect, useRef } from "react";
import { useAppDispatch } from "app/hooks";
import { Edge } from "app/slices/edges";
import { ProductionStep } from "app/slices/productionSteps";
import { updateIOLocation } from "app/slices/ui";

interface Proptypes {
  children: React.ReactNode;
  edges: Edge[];
  productionStep: ProductionStep;
}

const IOLocation = ({ children, productionStep, edges }: Proptypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (!ref.current) return;
    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const location = {
      top,
      left,
      width,
      height,
    };
    edges.forEach(edge => {
      dispatch(
        updateIOLocation({ edge: edge.id, productionStep: productionStep.id, location })
      );
    });
  }, [productionStep]);

  return <div ref={ref}>{children}</div>;
};

export default IOLocation;

import { shallowEqual } from "react-redux";
import { useAppSelector } from "app/hooks";
import { getIOEdges } from "app/slices/edges";
import { Ingredient } from "data/recipes";
import IODrag from "./IODrag";
import IOLocation from "./IOLocation";

import type { ProductionStep } from "app/slices/productionSteps";

interface Proptypes {
  productionStep: ProductionStep;
  product: Ingredient;
  io: "consumer" | "supplier";
  qtyEditable?: true;
}

const Transput = ({ productionStep, product, io, qtyEditable }: Proptypes) => {
  const edges = useAppSelector(
    getIOEdges({
      productionStepId: productionStep.id,
      io,
      item: product.item,
    }),
    shallowEqual
  );

  return (
    <IOLocation productionStep={productionStep} edges={edges}>
      <IODrag
        io={io}
        product={product}
        productionStep={productionStep}
        edges={edges}
        qtyEditable={qtyEditable}
      />
    </IOLocation>
  );
};

export default Transput;

import { useAppSelector } from "app/hooks";
import { getProductionStep } from "app/slices/productionSteps";
import ByProducts from "./ByProducts";
import IODrag from "./IODrag";

interface Proptypes {
  productionStepId: string;
}

const Outputs = ({ productionStepId }: Proptypes) => {
  const productionStep = useAppSelector(getProductionStep(productionStepId));

  return (
    <div className="bg-zinc-800 p-2 rounded-md">
      <h2 className="text-amber-500">Outputs</h2>
      <div className="flex justify-between gap-3">
        <div className="">
          <h2>Product</h2>
          <IODrag
            productionStep={productionStepId}
            io="output"
            product={productionStep.product}
            qtyEditable={true}
          />
        </div>
        <ByProducts productionStep={productionStepId} />
      </div>
    </div>
  );
};

export default Outputs;

import { useAppSelector } from "app/hooks";
import { getProductionStep } from "app/slices/productionSteps";
import { items } from "data";
import ByProducts from "./ByProducts";
import QtySelector from "./QtySelector";

interface Proptypes {
  productionStepId: string;
}

const Outputs = ({ productionStepId }: Proptypes) => {
  const productionStep = useAppSelector(getProductionStep(productionStepId));

  return (
    <div className="bg-zinc-800 p-2 rounded-md">
      <h2 className="text-amber-500">Outputs</h2>
      <div className="flex justify-between gap-3">
        {/* Product */}
        <div className="">
          <h2>Product</h2>
          <div className="min-w-[100px] border-2 border-zinc-300 rounded-md p-2">
            <h2 className="font-bold">{items.map[productionStep.product.item].name}</h2>
            <QtySelector productionStep={productionStep} />
          </div>
        </div>
        <ByProducts productionStep={productionStepId} />
      </div>
    </div>
  );
};

export default Outputs;

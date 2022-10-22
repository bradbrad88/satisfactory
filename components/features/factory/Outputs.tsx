import { shallowEqual } from "react-redux";
import { useAppSelector } from "app/hooks";
import { getMainProduct } from "app/slices/productionSteps";
import ByProducts from "./ByProducts";
import Transput from "./Transput";

import type { ProductionStep } from "app/slices/productionSteps";

interface Proptypes {
  productionStep: ProductionStep;
}

const Outputs = ({ productionStep }: Proptypes) => {
  return (
    <div className="bg-zinc-800 p-2 rounded-md">
      <h2 className="text-amber-500">Outputs</h2>
      <div className="flex justify-between gap-3">
        <MainProduct productionStep={productionStep} />
        <ByProducts productionStep={productionStep} />
      </div>
    </div>
  );
};

const MainProduct = ({ productionStep }: { productionStep: ProductionStep }) => {
  const product = useAppSelector(getMainProduct(productionStep.id), shallowEqual)!;
  return (
    <div className="">
      <h2>Product</h2>
      <Transput
        key={productionStep.id + product.item + "supplier"}
        productionStep={productionStep}
        product={product}
        io="supplier"
        qtyEditable={true}
      />
    </div>
  );
};

export default Outputs;

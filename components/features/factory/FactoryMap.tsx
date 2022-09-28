import { useAppSelector } from "app/hooks";
import { getProductionSteps } from "app/slices/productionSteps";
import ProductionStep from "./ProductionStep";

const FactoryMap = () => {
  const productionSteps = useAppSelector(getProductionSteps);

  const renderProductionSteps = () =>
    productionSteps.map(id => <ProductionStep key={id} id={id} />);
  return (
    <div className="flex flex-wrap flex-row bg-zinc-900 p-10 min-w-[100vw] gap-5">
      {renderProductionSteps()}
    </div>
  );
};

export default FactoryMap;

import { useAppSelector } from "app/hooks";
import { getProductionSteps } from "app/slices/productionSteps";
import DropZone from "./DropZone";
import ProductionStep from "./ProductionStep";

const FactoryMap = () => {
  const productionSteps = useAppSelector(getProductionSteps);
  const renderProductionSteps = () =>
    productionSteps.map(id => <ProductionStep key={id} id={id} />);
  return (
    <DropZone>
      <div className="flex flex-wrap flex-row bg-zinc-900 p-10 min-w-[3000px] min-h-[3000px] justify-center items-center gap-5">
        {renderProductionSteps()}
      </div>
    </DropZone>
  );
};

export default FactoryMap;

import { useMemo } from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "app/hooks";
import { getFactoryEdges } from "app/slices/edges";
import { getProductionSteps } from "app/slices/productionSteps";
import DropZone from "./DropZone";
import Edge from "./Edge";
import ProductionStep from "./ProductionStep";

interface Proptypes {
  factory: string;
}

const FactoryMap = ({ factory }: Proptypes) => {
  const productionSteps = useAppSelector(getProductionSteps(factory), shallowEqual);
  const edges = useAppSelector(getFactoryEdges(factory), shallowEqual);

  const renderProductionSteps = useMemo(
    () => productionSteps.map(id => <ProductionStep key={id} id={id} />),
    [productionSteps]
  );

  const renderEdges = useMemo(() => {
    if (!edges) return null;
    return edges.map(id => <Edge key={id} id={id} />);
  }, [edges]);

  return (
    <DropZone>
      <div className="flex flex-wrap flex-row bg-zinc-900 p-10 min-w-[3000px] min-h-[3000px] justify-center items-center gap-5 bg-green-5000 bg-opacity-20">
        {renderProductionSteps}
        {renderEdges}
      </div>
    </DropZone>
  );
};

export default FactoryMap;

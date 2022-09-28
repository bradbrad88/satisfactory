import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getProductionSteps, getProductionStep } from "app/slices/productionSteps";
import Button from "components/common/Button";

const ProductionStep = ({ id }: { id: string }) => {
  const productionStep = useAppSelector(getProductionStep(id));

  return <Button onClick={() => {}}>{productionStep.product.item}</Button>;
};

const ProductionStepList = () => {
  const dispatch = useAppDispatch();
  const productionSteps = useAppSelector(getProductionSteps);
  const newProductionStep = () => {
    dispatch(action.createProductionStep({ product: { item: "Some shit", qty: 20000 } }));
  };

  const renderProductionSteps = () => {
    return productionSteps.map(id => <ProductionStep id={id} />);
  };

  return (
    <div className="flex flex-col w-full h-full bg-zinc-900 border-zinc-300 border-r-2 gap-3 p-3">
      <Button onClick={newProductionStep}>New Production Step</Button>
      {renderProductionSteps()}
    </div>
  );
};

export default ProductionStepList;

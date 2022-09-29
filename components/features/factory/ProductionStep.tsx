import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getProductionStep } from "app/slices/productionSteps";
import DeleteButton from "components/common/DeleteButton";
import { items } from "data";
import QtySelector from "./QtySelector";
import RecipeSelector from "./RecipeSelector";
import RequiredInputs from "./RequiredInputs";

interface Proptypes {
  id: string;
}

const ProductionStep = ({ id }: Proptypes) => {
  const productionStep = useAppSelector(getProductionStep(id));
  const dispatch = useAppDispatch();
  const onDelete = () => {
    dispatch(action.destroyProductionStep(id));
  };
  return (
    <div className="relative grid grid-flow-row min-w-[300px] border-zinc-300 border-2 rounded-lg overflow-hidden p-3 bg-zinc-700 text-white gap-3">
      <div className="absolute right-1 top-1">
        <DeleteButton onDelete={onDelete} />
      </div>
      <h1>{items.map[productionStep.product.item].name}</h1>
      <QtySelector productionStep={productionStep} />
      {/* Recipe Selector */}
      <RecipeSelector
        productionStep={productionStep.id}
        item={productionStep.product.item}
        selected={productionStep.recipe}
      />
      {/* Render byProducts */}

      {/* Render  */}
      <RequiredInputs productionStep={productionStep} />
    </div>
  );
};

export default ProductionStep;

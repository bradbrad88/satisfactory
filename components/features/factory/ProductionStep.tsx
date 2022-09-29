import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getProductionStep } from "app/slices/productionSteps";
import { items } from "data";
import DeleteButton from "components/common/DeleteButton";
import RecipeSelector from "./RecipeSelector";
import RequiredInputs from "./RequiredInputs";
import ProductionDetails from "./ProductionDetails";
import Outputs from "./Outputs";

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
    <div className="relative grid grid-flow-row min-w-[300px] border-zinc-300 border-2 rounded-lg overflow-hidde p-3 bg-zinc-700 text-white gap-3">
      <div className="flex h-fit justify-between gap-5">
        {/* Toolbar */}
        <RecipeSelector
          productionStep={productionStep.id}
          item={productionStep.product.item}
          selected={productionStep.recipe}
        />
        <h2 className="font-bold text-lg">{items.map[productionStep.product.item].name}</h2>
        <DeleteButton onDelete={onDelete} />
      </div>

      {/* Production Details and Input/Output */}
      <div className="flex gap-3">
        {/* Production Details */}
        <ProductionDetails productionStep={id} />

        {/* Inputs / Outputs */}
        <div className="flex flex-col gap-3">
          {/* Outputs */}
          <Outputs productionStepId={id} />

          {/* Inputs */}
          <div className="bg-zinc-800 p-2 rounded-md">
            <h2 className="text-amber-500">Inputs</h2>
            <RequiredInputs productionStep={productionStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionStep;

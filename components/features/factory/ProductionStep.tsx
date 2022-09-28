import { useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getProductionStep } from "app/slices/productionSteps";
import { items } from "data";
import QtySelector from "./QtySelector";
import RecipeSelector from "./RecipeSelector";
import RequiredInputs from "./RequiredInputs";

interface Proptypes {
  id: string;
}

const ProductionStep = ({ id }: Proptypes) => {
  const productionStep = useAppSelector(getProductionStep(id));
  return (
    <div className="grid grid-flow-row min-w-[300px] border-zinc-300 border-2 rounded-lg overflow-hidden p-3 bg-zinc-700 text-white gap-3">
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
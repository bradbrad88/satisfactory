import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getByProducts, getProductionStep } from "app/slices/productionSteps";
import DeleteButton from "components/common/DeleteButton";
import { items, recipes, buildings } from "data";
import QtySelector from "./QtySelector";
import RecipeSelector from "./RecipeSelector";
import RequiredInputs from "./RequiredInputs";
import ByProduct from "./ByProduct";

interface Proptypes {
  id: string;
}

const ProductionStep = ({ id }: Proptypes) => {
  const productionStep = useAppSelector(getProductionStep(id));
  const byProducts = useAppSelector(getByProducts(id));
  const dispatch = useAppDispatch();
  const onDelete = () => {
    dispatch(action.destroyProductionStep(id));
  };

  const renderByProducts = () => {
    return (
      byProducts?.map(byProduct => (
        <ByProduct
          key={productionStep.id + byProduct.item}
          productionStep={productionStep.id}
          product={byProduct}
        />
      )) || []
    );
  };

  return (
    <div className="relative grid grid-flow-row min-w-[300px] border-zinc-300 border-2 rounded-lg overflow-hidde p-3 bg-zinc-700 text-white gap-3">
      <div className="flex h-fit justify-between gap-3">
        {/* Toolbar */}
        <RecipeSelector
          productionStep={productionStep.id}
          item={productionStep.product.item}
          selected={productionStep.recipe}
        />
        <DeleteButton onDelete={onDelete} />
      </div>
      <div>
        {/* Building & Power */}
        <div>{buildings.map[recipes.map[productionStep.recipe].building].name}</div>
      </div>
      <div className="flex gap-3">
        <div className="">
          {/* Product */}
          <h2>Product</h2>
          <div className="min-w-[100px] border-2 border-zinc-300 rounded-md p-2">
            <h2 className="font-bold">{items.map[productionStep.product.item].name}</h2>
            <QtySelector productionStep={productionStep} />
          </div>
        </div>
        <div className="">
          {/* By Products */}
          <h2>By Products</h2>
          <div className="grid grid-flow-col">{renderByProducts()}</div>
        </div>
      </div>

      {/* Recipe Selector */}

      {/* Render byProducts */}

      {/* Render  */}
      <RequiredInputs productionStep={productionStep} />
    </div>
  );
};

export default ProductionStep;

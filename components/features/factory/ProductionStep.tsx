import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import {
  getBuildingDetails,
  getByProducts,
  getProductionStep,
} from "app/slices/productionSteps";
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
  const buildingDetails = useAppSelector(getBuildingDetails(id));
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

      {/* Buildings and Input/Output */}
      <div className="flex gap-3">
        {/* Building & Power */}
        <div className="bg-zinc-800 rounded-md p-2">
          <h2 className="text-amber-500">Production Details</h2>
          <div>
            <div>
              <h2 className="font-bold">{buildingDetails?.building}</h2>
              <div>{Math.ceil(buildingDetails?.count || 0)}</div>
            </div>
            <div className="">
              <h2>Overclock:</h2>
              <div>{buildingDetails?.overclock.toFixed(4)}%</div>
            </div>
            <div>
              {buildingDetails?.power && buildingDetails.power >= 0
                ? "Power consumed"
                : "Power generated"}
              :
            </div>
            <div>{buildingDetails?.power.toFixed(1)}MW</div>
          </div>
        </div>

        {/* Outputs */}
        <div className="flex flex-col gap-3">
          <div className="bg-zinc-800 p-2 rounded-md">
            <h2 className="text-amber-500">Outputs</h2>
            <div className="flex justify-between gap-3">
              <div className="">
                {/* Product */}
                <h2>Product</h2>
                <div className="min-w-[100px] border-2 border-zinc-300 rounded-md p-2">
                  <h2 className="font-bold">{items.map[productionStep.product.item].name}</h2>
                  <QtySelector productionStep={productionStep} />
                </div>
              </div>
              {!!byProducts?.length && (
                <div className="">
                  {/* By Products */}
                  <h2>By Products</h2>
                  <div className="grid grid-flow-col">{renderByProducts()}</div>
                </div>
              )}
            </div>
          </div>

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

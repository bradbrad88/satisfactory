import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getProductionStep } from "app/slices/productionSteps";
import { getDragElement } from "app/slices/ui";
import { EdgeInit } from "app/slices/edges";
import DeleteButton from "components/common/DeleteButton";
import RecipeSelector from "./RecipeSelector";
import RequiredInputs from "./RequiredInputs";
import ProductionDetails from "./ProductionDetails";
import Outputs from "./Outputs";
import Positioner from "components/common/Positioner";
import { items } from "data";

interface Proptypes {
  id: string;
}

const ProductionStep = ({ id }: Proptypes) => {
  const productionStep = useAppSelector(getProductionStep(id), shallowEqual);
  const drag = useAppSelector(getDragElement, shallowEqual);
  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(action.destroyProductionStep(productionStep.id));
  };

  const onDrop: React.DragEventHandler = e => {
    e.stopPropagation();
    e.preventDefault();

    const { amount, id: incomingProductionStep, item, type } = drag!;

    switch (type) {
      case "supplier": {
        // Initiated from an output meaning incomingProductionStep will be supplier
        const edge: EdgeInit = {
          amount,
          consumer: productionStep.id,
          supplier: incomingProductionStep,
          item,
          dependant: "CONSUMER",
        };

        dispatch(action.createDependancy(edge));
        break;
      }
      case "consumer": {
        const edge: EdgeInit = {
          amount,
          consumer: incomingProductionStep,
          supplier: productionStep.id,
          item,
          dependant: "SUPPLIER",
        };
        dispatch(action.createDependancy(edge));
      }
      default:
        break;
    }
  };

  const onDragOver: React.DragEventHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "link";
  };

  return (
    <Positioner
      id={productionStep.id}
      updater={action.updateLocation}
      x={productionStep.location.x}
      y={productionStep.location.y}
    >
      <div
        className="relative grid grid-flow-row w-fit h-fit min-w-[300px] border-zinc-300 border-2 rounded-lg bg-zinc-700 text-white gap-3 p-3 select-none -trranslate-x-1/2 -trranslate-y-1/2"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
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
          <ProductionDetails productionStep={productionStep} />

          {/* Inputs / Outputs */}
          <div className="flex flex-col gap-3">
            {/* Outputs */}
            <Outputs productionStep={productionStep} />

            {/* Inputs */}
            <div className="bg-zinc-800 p-2 rounded-md">
              <h2 className="text-amber-500">Inputs</h2>
              <RequiredInputs productionStep={productionStep} />
            </div>
          </div>
        </div>
      </div>
    </Positioner>
  );
};

export default ProductionStep;

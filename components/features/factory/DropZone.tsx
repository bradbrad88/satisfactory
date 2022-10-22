import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getDragElement, getMapDetails } from "app/slices/ui";
import type { EdgeOneSide } from "app/slices/edges";
import { getActiveFactory } from "app/slices/factories";
import { useState } from "react";
import { items, Recipe } from "data";
import RecipeList from "./RecipeList";

interface Proptypes {
  children: React.ReactNode;
}

const DropZone = ({ children }: Proptypes) => {
  const [newStep, setNewStep] = useState<{
    recipes: Recipe[];
    item: string;
    amount: number;
    id: string;
    location: { x: number; y: number };
  } | null>();
  const [recipeLocation, setRecipeLocation] = useState({ x: 0, y: 0 });
  const dispatch = useAppDispatch();
  const dragElement = useAppSelector(getDragElement);
  const factory = useAppSelector(getActiveFactory)!;
  const { mapScale: scale, top: mapY, left: mapX } = useAppSelector(getMapDetails);

  const onDrop: React.DragEventHandler = e => {
    if (!dragElement) return;
    const { type, id, item, amount } = dragElement;
    switch (type) {
      case "consumer": {
        const edge: EdgeOneSide = { amount, item, consumer: id, dependant: "SUPPLIER" };
        const x = (e.clientX - mapX) / scale;
        const y = (e.clientY - mapY) / scale;
        const location = { x, y };
        const productionStep = { factory, product: { item, amount }, location };
        return dispatch(
          action.createProductionStepAndLinkEdge({
            edge,
            productionStep,
          })
        );
      }

      case "supplier": {
        const itemData = items.map[item];

        const location = { x: (e.clientX - mapX) / scale, y: (e.clientY - mapY) / scale };
        setNewStep({ recipes: itemData.canCreate, amount, item, id, location });
        setRecipeLocation(location);
        return;
      }

      default:
        break;
    }
  };

  const close = () => {
    setNewStep(null);
  };

  const onDragOver: React.DragEventHandler = e => {
    e.preventDefault();
    e.dataTransfer.effectAllowed = "copy";
  };

  const renderRecipeList = () => {
    const style: React.CSSProperties = {
      left: recipeLocation.x,
      top: recipeLocation.y,
    };

    return (
      <div className="absolute" style={style}>
        <RecipeList {...newStep!} close={close} />
      </div>
    );
  };

  return (
    <div className="relative" onDragOver={onDragOver} onDrop={onDrop}>
      <>
        {children}
        {newStep && renderRecipeList()}
      </>
    </div>
  );
};

export default DropZone;

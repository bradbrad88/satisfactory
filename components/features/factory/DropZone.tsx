import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getDragElement } from "app/slices/ui";
import type { EdgeOneSide } from "app/slices/edges";
import { getActiveFactory } from "app/slices/factories";
import { useState } from "react";
import { items, Recipe } from "data";
import RecipeList from "./RecipeList";

interface Proptypes {
  children: React.ReactNode;
  scale: number;
}

const DropZone = ({ children, scale }: Proptypes) => {
  const [newStep, setNewStep] = useState<{
    recipes: Recipe[];
    item: string;
    amount: number;
    id: string;
  } | null>();
  const [recipeLocation, setRecipeLocation] = useState({ x: 0, y: 0 });
  const dispatch = useAppDispatch();
  const dragElement = useAppSelector(getDragElement);
  const factory = useAppSelector(getActiveFactory)!;

  const onDrop: React.DragEventHandler = e => {
    if (!dragElement) return;
    const { type, id, item, amount } = dragElement;
    switch (type) {
      case "input": {
        const edge: EdgeOneSide = { amount, item, input: id };
        const productionStep = { factory, product: { item, amount } };
        return dispatch(
          action.createProductionStepAndLinkEdge({
            edge,
            options: { dependant: true },
            productionStep,
          })
        );
      }

      case "output": {
        const itemData = items.map[item];
        const { left, top } = e.currentTarget.getBoundingClientRect();
        const location = { x: (e.clientX - left) / scale, y: (e.clientY - top) / scale };
        setNewStep({ recipes: itemData.canCreate, amount, item, id });
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

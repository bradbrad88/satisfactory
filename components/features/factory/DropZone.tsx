import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getDragElement } from "app/slices/ui";
import type { EdgeOneSide } from "app/slices/edges";
import { getActiveFactory } from "app/slices/factories";

interface Proptypes {
  children: React.ReactNode;
}

const DropZone = ({ children }: Proptypes) => {
  const dispatch = useAppDispatch();
  const dragElement = useAppSelector(getDragElement);
  const factory = useAppSelector(getActiveFactory)!;

  const onDrop = () => {
    if (!dragElement) return;
    const { type, id, item, amount } = dragElement;
    switch (type) {
      case "input":
        const edge: EdgeOneSide = { amount, item, output: id };
        const productionStep = { factory, product: { item, amount } };
        return dispatch(
          action.createProductionStepAndLinkEdge({
            edge,
            options: { dependant: true },
            productionStep,
          })
        );

      case "output":
        return;

      default:
        break;
    }
  };

  const onDragOver: React.DragEventHandler = e => {
    e.preventDefault();
    e.dataTransfer.effectAllowed = "copy";
  };

  return (
    <div onDragOver={onDragOver} onDrop={onDrop}>
      {children}
    </div>
  );
};

export default DropZone;

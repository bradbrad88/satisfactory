import { useAppDispatch } from "app/hooks";
import { dragElement } from "app/slices/ui";
import { action } from "app/slices/entities";
import { items } from "data";
import Container from "components/common/Container";
import QtySelector from "./QtySelector";

import type { Ingredient } from "data/recipes";
import { useState } from "react";
import { Edge } from "app/slices/edges";
import { ProductionStep } from "app/slices/productionSteps";

interface Proptypes {
  productionStep: ProductionStep;
  product: Ingredient;
  io: "consumer" | "supplier";
  qtyEditable?: true;
  edges: Edge[];
}

const IODrag = ({ productionStep, product, edges, qtyEditable, io }: Proptypes) => {
  const [editQty, setEditQty] = useState(false);
  const dispatch = useAppDispatch();

  const onDragStart: React.DragEventHandler = e => {
    const { amount, item } = product;
    e.dataTransfer.dropEffect = "copy";
    dispatch(dragElement({ id: productionStep.id, type: io, amount, item }));
  };

  const onDragEnd: React.DragEventHandler = e => {
    dispatch(dragElement(null));
  };

  const submitQtyUpdate = (amount: number) => {
    if (amount !== product.amount)
      dispatch(
        action.updateProductQty({
          productionStep: productionStep.id,
          amount,
          clearDependants: true,
        })
      );
  };

  const supplied = edges.reduce((sum, edge) => {
    return edge.amount + sum;
  }, 0);

  const supply =
    supplied > product.amount ? "over" : supplied === product.amount ? "equal" : "under";

  const diff = (supplied - product.amount).toFixed(4);

  const className = () => {
    switch (supply) {
      case "under":
        return "text-amber-500";
      case "over":
        return "text-blue-500";

      case "equal":
        return "text-green-500";
      default:
        return "";
    }
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onPointerDown={e => e.stopPropagation()}
      onDragEnd={onDragEnd}
      className="h-full"
    >
      <Container selected={qtyEditable} onClick={() => setEditQty(!editQty)}>
        <h2 className="font-bold">{items.map[product.item].name}</h2>
        <QtySelector
          edit={editQty}
          setEdit={setEditQty}
          allowEdit={qtyEditable}
          onSubmit={submitQtyUpdate}
          amount={product.amount}
        />
        <p className={className() + " text-center"}>
          {supply === "over" ? `+${diff}` : supply === "under" ? `${diff}` : "Balanced"}
        </p>
      </Container>
    </div>
  );
};

export default IODrag;

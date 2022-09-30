import { useAppDispatch } from "app/hooks";
import { dragElement } from "app/slices/ui";
import { action } from "app/slices/entities";
import { items } from "data";
import Container from "components/common/Container";
import QtySelector from "./QtySelector";

import type { Ingredient } from "data/recipes";
import { useState } from "react";

interface Proptypes {
  productionStep: string;
  product: Ingredient;
  io: "input" | "output";
  qtyEditable?: true;
}

const IODrag = ({ productionStep, product, qtyEditable, io }: Proptypes) => {
  const [editQty, setEditQty] = useState(false);

  const dispatch = useAppDispatch();

  const onDragStart: React.DragEventHandler = e => {
    e.dataTransfer.dropEffect = "copy";
    e.dataTransfer.setData("", "");
    dispatch(dragElement({ id: productionStep, type: io, qty: 12, item: product.item }));
  };

  const onDragEnd: React.DragEventHandler = e => {
    dispatch(dragElement(null));
  };

  const submitQtyUpdate = (amount: number) => {
    if (amount !== product.amount)
      dispatch(action.updateProductQty({ productionStep, amount }));
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onMouseDown={e => e.stopPropagation()}
      onDragEnd={onDragEnd}
    >
      <Container onClick={() => setEditQty(!editQty)}>
        <h2 className="font-bold">{items.map[product.item].name}</h2>
        <QtySelector
          edit={editQty}
          setEdit={setEditQty}
          allowEdit={qtyEditable}
          onSubmit={submitQtyUpdate}
          amount={product.amount}
        />
      </Container>
    </div>
  );
};

export default IODrag;

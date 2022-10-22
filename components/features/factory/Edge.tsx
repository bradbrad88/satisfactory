import { useState } from "react";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getEdge } from "app/slices/edges";
import { getEdgePosition } from "app/slices/ui";
import Container from "components/common/Container";
import Positioner from "components/common/Positioner";
import QtySelector from "./QtySelector";

interface Proptypes {
  id: string;
}

const Edge = ({ id }: Proptypes) => {
  const [editQty, setEditQty] = useState(false);
  const edge = useAppSelector(getEdge(id), shallowEqual);
  const { x, y } = useAppSelector(getEdgePosition(id), shallowEqual);
  const dispatch = useAppDispatch();

  const dependant = !!edge.dependant;

  const onQtyUpdate = (amount: number) => {
    dispatch(
      action.updateEdgeQtyAndCalculateProdStepEdges({
        id: edge.id,
        amount,
        clearDependant: true,
      })
    );
  };

  return (
    <Positioner x={x} y={y} id="">
      <div className="w-fit -translate-x-1/2 -translate-y-1/2 text-white">
        <Container className={dependant ? "relative bg-zinc-900" : "bg-sky-700 z-10"}>
          <div onClick={() => setEditQty(!editQty)}>
            <QtySelector
              edit={editQty}
              setEdit={setEditQty}
              amount={edge.amount}
              onSubmit={onQtyUpdate}
              allowEdit={true}
            />
          </div>
        </Container>
      </div>
    </Positioner>
  );
};

export default Edge;

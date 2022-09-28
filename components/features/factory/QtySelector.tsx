import { useState } from "react";
import { useAppDispatch } from "app/hooks";
import { action } from "app/slices/entities";
import { ProductionStep } from "app/slices/productionSteps";
import Input from "components/common/Input";

interface Proptypes {
  productionStep: ProductionStep;
}

const QtySelector = ({ productionStep }: Proptypes) => {
  const [edit, setEdit] = useState(true);
  const dispatch = useAppDispatch();

  const quantity = productionStep.product.qty.toFixed(4);

  const onSubmit = (value: string) => {
    const qty = parseFloat(value);
    if (qty.toFixed(4) === quantity) return setEdit(false);
    dispatch(action.updateProductQty({ productionStep: productionStep.id, qty }));
    setEdit(false);
  };

  const onKeyDown: React.KeyboardEventHandler = e => {
    if (e.code === "Escape") {
      setEdit(false);
    }
  };

  return (
    <div
      onPointerDown={e => e.stopPropagation()}
      className="relative p-1 border-zinc-300 border-2 rounded-md"
    >
      {/* Edit mode vs Read only */}
      {edit ? (
        <div onKeyDown={onKeyDown}>
          <Input
            value={productionStep.product.qty + ""}
            submit={onSubmit}
            submitOnBlur={true}
          />
        </div>
      ) : (
        <div className="cursor-pointer hover:text-yellow-200" onClick={() => setEdit(true)}>
          {quantity}
        </div>
      )}
    </div>
  );
};

export default QtySelector;
import { useState } from "react";
import { useAppDispatch } from "app/hooks";
import { action } from "app/slices/entities";
import { ProductionStep } from "app/slices/productionSteps";
import Input from "components/common/Input";

interface Proptypes {
  productionStep: ProductionStep;
}

const QtySelector = ({ productionStep }: Proptypes) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useAppDispatch();

  const quantity = productionStep.product.amount.toFixed(4);

  const onSubmit = (value: string) => {
    const amount = parseFloat(value);
    if (amount.toFixed(4) === quantity) return setEdit(false);
    dispatch(action.updateProductQty({ productionStep: productionStep.id, amount }));
    setEdit(false);
  };

  const onKeyDown: React.KeyboardEventHandler = e => {
    if (e.code === "Escape") {
      setEdit(false);
    }
  };

  return (
    <div onPointerDown={e => e.stopPropagation()} className="">
      {/* Edit mode vs Read only */}
      {edit ? (
        <div onKeyDown={onKeyDown} className="w-24">
          <Input
            value={productionStep.product.amount + ""}
            submit={onSubmit}
            submitOnBlur={true}
          />
        </div>
      ) : (
        <div
          className="cursor-pointer hover:text-yellow-200 p-2"
          onClick={() => setEdit(true)}
        >
          {quantity}
        </div>
      )}
    </div>
  );
};

export default QtySelector;

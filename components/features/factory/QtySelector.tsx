import { useState } from "react";
import Input from "components/common/Input";

interface Proptypes {
  amount: number;
  onSubmit?: (value: number) => void;
  edit: boolean;
  setEdit: (edit: boolean) => void;
  allowEdit?: true;
}

const QtySelector = ({ amount, onSubmit = () => {}, edit, setEdit, allowEdit }: Proptypes) => {
  // const [edit, setEdit] = useState(false);
  const quantity = amount.toFixed(4);

  const handleSubmit = (value: string) => {
    const amount = parseFloat(value);

    if (isNaN(amount)) return;

    setEdit(false);
    onSubmit(amount);
  };

  const onKeyDown: React.KeyboardEventHandler = e => {
    if (e.code === "Escape") {
      setEdit(false);
    }
  };

  return (
    <div onPointerDown={e => e.stopPropagation()} className="">
      {/* Edit mode vs Read only */}
      {edit && allowEdit ? (
        <div onKeyDown={onKeyDown} className="w-24" onClick={e => e.stopPropagation()}>
          <Input value={amount + ""} submit={handleSubmit} submitOnBlur={true} />
        </div>
      ) : (
        <div
          className="cursor-pointer hover:text-yellow-200 p-2"
          // onClick={() => setEdit(true)}
        >
          {quantity}
        </div>
      )}
    </div>
  );
};

export default QtySelector;

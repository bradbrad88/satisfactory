import React, { useRef, useState } from "react";

interface Proptypes {
  onDelete: () => void;
}

const DeleteButton = ({ onDelete }: Proptypes) => {
  const [confirm, setConfirm] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const onClick = () => {
    clearTimeout(timeoutRef.current);

    if (!confirm) {
      setConfirm(true);
      timeoutRef.current = setTimeout(() => {
        setConfirm(false);
      }, 2000);
    } else {
      onDelete();
    }
  };
  return (
    <button
      className="bg-transparent hover:bg-red-500 border-[1px] border-red-600 rounded-md p-1"
      onClick={onClick}
    >
      {confirm ? "Confirm" : "Delete"}
    </button>
  );
};

export default DeleteButton;

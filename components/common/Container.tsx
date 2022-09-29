import classnames from "classnames";
import React from "react";

interface Proptypes {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const Container = ({ children, selected = false, onClick = () => {} }: Proptypes) => {
  const classes = classnames(
    "border-zinc-400 border-2 bg-zinc-800 rounded-lg hover:shadow-zinc-400 hover:shadow-md cursor-pointer min-w-[120px] p-2 transition-all",
    { "border-amber-500": selected }
  );
  return (
    <div onClick={onClick} className={classes}>
      {children}
    </div>
  );
};
export default Container;

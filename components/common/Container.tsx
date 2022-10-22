import classnames from "classnames";
import React from "react";

interface Proptypes {
  children: React.ReactNode;
  className?: string;
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const Container = ({
  children,
  className = "bg-zinc-800",
  selected = false,
  onClick = () => {},
}: Proptypes) => {
  const classes = classnames(
    className,
    "h-full border-zinc-400 border-2 rounded-lg hover:shadow-zinc-400 hover:shadow-md cursor-pointer min-w-[120px] p-2 transition-all overflow-hidden",
    { "border-amber-500": selected }
  );
  return (
    <div onClick={onClick} className={classes}>
      {children}
    </div>
  );
};
export default Container;

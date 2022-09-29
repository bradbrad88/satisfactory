import classnames from "classnames";

interface Proptypes {
  children: React.ReactNode;
  selected?: boolean;
}

const Container = ({ children, selected = false }: Proptypes) => {
  const classes = classnames(
    "border-zinc-400 border-2 bg-zinc-800 rounded-lg hover:shadow-zinc-400 hover:shadow-md cursor-pointer min-w-[120px] p-2 transition-all",
    { "border-amber-500": selected }
  );
  return <div className={classes}>{children}</div>;
};
export default Container;

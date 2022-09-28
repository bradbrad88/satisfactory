import { forwardRef, LegacyRef } from "react";

interface Proptypes {
  onClick: React.MouseEventHandler;
  children: React.ReactNode;
  colour?: "green" | "orange" | "red" | "white";
  textColour?: "white" | "black";
}

const Button = forwardRef(
  (
    { onClick, children, colour = "orange", textColour = "white" }: Proptypes,
    ref: LegacyRef<HTMLButtonElement>
  ) => {
    const colourMap = {
      green: "bg-green-700",
      orange: "bg-orange-600",
      red: "bg-red-500",
      white: "bg-white",
    };
    const textMap = {
      white: "text-white",
      black: "text-black",
    };
    const colourStyle = colourMap[colour];
    const textStyle = textMap[textColour];
    return (
      <button
        className={`text-base font-bold text-white rounded-md p-2 w-full ${colourStyle} ${textStyle}`}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default Button;

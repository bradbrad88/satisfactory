import { useEffect, useRef, useState } from "react";

interface Proptypes {
  value: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  submit?: (input: string) => void;
  submitOnBlur?: boolean;
  submitOnEnter?: boolean;
}

const Input = ({
  value,
  placeholder,
  onChange = () => {},
  submit = () => {},
  submitOnBlur = false,
  submitOnEnter = true,
}: Proptypes) => {
  const [innerValue, setInnerValue] = useState(value);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.select();
  }, []);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  const onKeyDown: React.KeyboardEventHandler = e => {
    if (e.code === "Enter" && submitOnEnter) {
      submit(innerValue);
    }
  };
  const onBlur: React.FocusEventHandler<HTMLInputElement> = e => {
    if (submitOnBlur) {
      submit(innerValue);
    }
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInnerValue(e.target.value);
    onChange(e);
  };
  return (
    <input
      ref={ref}
      className="p-2 text-base text-black font-bold bg-zinc-200 rounded-md w-full focus-within:outline-yellow-500"
      onChange={handleChange}
      value={innerValue}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={e => e.target.select()}
    />
  );
};

export default Input;

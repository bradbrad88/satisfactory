interface Proptypes {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ value, onChange }: Proptypes) => {
  return (
    <input
      className="p-3 text-xl font-bold bg-zinc-200 rounded-md w-full"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;

export const RadioInput = (props) => {
  const { value, name, id, onChange, label, checked } = props;

  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        id={id}
        onChange={onChange}
        className="cursor-pointer rounded-full border-none bg-gray-400 w-4 h-4 checked:text-blue-500"
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

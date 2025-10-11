export const TextField = (props) => {
  const { name, label, onChange, value, error } = props;

  return (
    <div>
      <label className="py-1 block text-chocolate-700" htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        className="input-textField"  
        autoComplete="off"    
      />
      {error && <small className="block text-red-600">{error}</small>}
    </div>
  );
};

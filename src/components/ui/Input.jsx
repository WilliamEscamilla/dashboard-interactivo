const Input = ({ id, name, type = 'text', value, onChange, placeholder, required = false, ...props }) => (
  <input
    id={id}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className="w-full p-2 border-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-white text-sm"
    {...props}
  />
);

export default Input;
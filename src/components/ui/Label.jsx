const Label = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="text-sm font-bold text-gray-800 dark:text-white"
  >
    {children}
  </label>
);

export default Label;
const VARIANTS = {
  primary: 'border-2 border-blue-600 bg-blue-600 text-white font-bold hover:bg-blue-700',
  danger: 'border-2 border-red-600  bg-red-600  text-white font-bold hover:bg-red-700',
  success: 'border-2 border-green-600 bg-green-600 text-white font-bold hover:bg-green-700',
  outline: 'border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-gray-900',
};

const Button = ({ label, onClick, variant = 'outline', type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-4 py-2 transition-colors ${VARIANTS[variant] ?? VARIANTS.outline}`}
  >
    {label}
  </button>
);

export default Button;
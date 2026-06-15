const COLORS = {
  alto: 'text-red-600',
  medio: 'text-yellow-600',
  bajo: 'text-green-600',
};

const Badge = ({ text, variant }) => (
  <span className={`text-sm font-bold uppercase ${COLORS[variant?.toLowerCase()] ?? 'text-gray-600'}`}>
    [{text}]
  </span>
);

export default Badge;
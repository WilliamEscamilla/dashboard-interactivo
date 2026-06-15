const STAT_ITEMS = (stats, percentage) => [
  { label: 'Total', value: stats.total, border: 'border-gray-800 dark:border-white' },
  { label: 'Pendientes', value: stats.pendiente, border: 'border-yellow-600' },
  { label: 'Completadas', value: stats.completada, border: 'border-green-600' },
  { label: 'Completado', value: `${percentage}%`, border: 'border-blue-600' },
];

const StatsPanelView = ({ stats, percentage }) => (
  <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {STAT_ITEMS(stats, percentage).map((item) => (
      <div key={item.label} className={`border-2 ${item.border} p-4`}>
        <p className="text-sm font-bold text-gray-600 dark:text-gray-400 m-0">{item.label}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white m-0">{item.value}</p>
      </div>
    ))}
  </section>
);

export default StatsPanelView;
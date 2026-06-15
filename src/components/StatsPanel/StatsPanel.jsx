import StatsPanelView from './StatsPanelView';

const StatsPanel = ({ stats }) => {
  const percentage = stats.total > 0
    ? Math.round((stats.completada / stats.total) * 100)
    : 0;

  return <StatsPanelView stats={stats} percentage={percentage} />;
};

export default StatsPanel;
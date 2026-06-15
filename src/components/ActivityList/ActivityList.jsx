import ActivityListView from './ActivityListView';

const URGENCY_STYLES = {
  alto: { border: 'border-l-4 border-red-600', variant: 'alto' },
  medio: { border: 'border-l-4 border-yellow-600', variant: 'medio' },
  bajo: { border: 'border-l-4 border-green-600', variant: 'bajo' },
};

const STATUS_OPTIONS = [
  { value: 'Todos', label: 'Todos' },
  { value: 'Pendiente', label: 'Pendiente' },
  { value: 'Completada', label: 'Completada' },
];

const URGENCY_OPTIONS = [
  { value: 'Todos', label: 'Todas' },
  { value: 'Alto', label: 'Alto' },
  { value: 'Medio', label: 'Medio' },
  { value: 'Bajo', label: 'Bajo' },
];

const ActivityList = ({ activities, statusFilter, urgencyFilter, onStatusChange, onUrgencyChange, onAddTask, onCompleteTask }) => {
  const enrichedActivities = activities.map((activity) => ({
    ...activity,
    styles: URGENCY_STYLES[activity.urgency.toLowerCase()] ?? { border: 'border-l-4 border-gray-600', variant: 'default' },
  }));

  return (
    <ActivityListView
      activities={enrichedActivities}
      statusFilter={statusFilter}
      urgencyFilter={urgencyFilter}
      statusOptions={STATUS_OPTIONS}
      urgencyOptions={URGENCY_OPTIONS}
      onStatusChange={onStatusChange}
      onUrgencyChange={onUrgencyChange}
      onAddTask={onAddTask}
      onCompleteTask={onCompleteTask}
    />
  );
};

export default ActivityList;
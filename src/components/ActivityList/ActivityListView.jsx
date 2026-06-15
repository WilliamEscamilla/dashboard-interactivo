import Label from '../ui/Label';
import Select from '../ui/Select';
import TaskForm from '../TaskForm/TaskForm';
import TaskItem from './TaskItem';

const ActivityListView = ({
  activities,
  statusFilter,
  urgencyFilter,
  statusOptions,
  urgencyOptions,
  onStatusChange,
  onUrgencyChange,
  onAddTask,
  onCompleteTask,
}) => (
  <section className="mt-8">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Tareas Asignadas</h2>

      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Label htmlFor="status-filter">Estado:</Label>
          <Select value={statusFilter} onChange={onStatusChange} options={statusOptions} />
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor="urgency-filter">Urgencia:</Label>
          <Select value={urgencyFilter} onChange={onUrgencyChange} options={urgencyOptions} />
        </div>
      </div>
    </div>

    <TaskForm onAddTask={onAddTask} />

    <div className="border-2 border-gray-300 dark:border-gray-600">
      {activities.length === 0 ? (
        <div className="p-8 text-center text-gray-800 dark:text-gray-200">
          No hay tareas que coincidan con los filtros actuales.
        </div>
      ) : (
        <ul className="list-none p-0 m-0 divide-y-2 divide-gray-300 dark:divide-gray-600">
          {activities.map((activity) => (
            <TaskItem key={activity.id} activity={activity} onCompleteTask={onCompleteTask} />
          ))}
        </ul>
      )}
    </div>
  </section>
);

export default ActivityListView;
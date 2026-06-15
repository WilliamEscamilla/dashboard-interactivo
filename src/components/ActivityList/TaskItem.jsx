import Badge from '../ui/Badge';
import Button from '../ui/Button';

const TaskItem = ({ activity, onCompleteTask }) => (
  <li className={`p-4 ${activity.styles.border}`}>
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white m-0">{activity.title}</h4>
          <Badge text={activity.urgency} variant={activity.styles.variant} />
        </div>
        {activity.description && (
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{activity.description}</p>
        )}
      </div>

      <div className="flex flex-col items-start md:items-end gap-2">
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          Estado: {activity.status}
        </span>
        <span className="text-sm font-bold text-gray-900 dark:text-white mb-2">
          Fecha: {activity.date} a las {activity.time}
        </span>
        {activity.status !== 'Completada' && (
          <Button
            label="Marcar Completada"
            onClick={() => onCompleteTask(activity.id)}
            variant="success"
          />
        )}
      </div>
    </div>
  </li>
);

export default TaskItem;
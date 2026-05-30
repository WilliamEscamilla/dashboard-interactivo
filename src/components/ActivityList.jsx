import React from 'react';
import TaskForm from './TaskForm';

const ActivityList = ({ 
    activities, 
    statusFilter, 
    urgencyFilter, 
    onStatusChange, 
    onUrgencyChange, 
    onAddTask 
}) => {

    // Determina el color del borde y badge según la urgencia
    const getUrgencyStyles = (urgency) => {
        switch (urgency.toLowerCase()) {
            case 'bajo':
                return { border: 'border-l-4 border-green-500', badge: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' };
            case 'medio':
                return { border: 'border-l-4 border-yellow-500', badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' };
            case 'alto':
                return { border: 'border-l-4 border-red-500', badge: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' };
            default:
                return { border: 'border-l-4 border-gray-500', badge: 'bg-gray-100 text-gray-800' };
        }
    };

    return (
        <section className="mt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Tareas Asignadas</h2>
                
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Estado:</label>
                        <select 
                            value={statusFilter} 
                            onChange={(e) => onStatusChange(e.target.value)}
                            className="p-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
                        >
                            <option value="Todos">Todos</option>
                            <option value="Pendiente">Pendiente</option>
                            <option value="Completada">Completada</option>
                        </select>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Urgencia:</label>
                        <select 
                            value={urgencyFilter} 
                            onChange={(e) => onUrgencyChange(e.target.value)}
                            className="p-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
                        >
                            <option value="Todos">Todas</option>
                            <option value="Alto">Alto</option>
                            <option value="Medio">Medio</option>
                            <option value="Bajo">Bajo</option>
                        </select>
                    </div>
                </div>
            </div>

            <TaskForm onAddTask={onAddTask} />

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                {activities.length === 0 ? (
                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                        No hay tareas que coincidan con los filtros actuales.
                    </div>
                ) : (
                    <ul className="list-none p-0 m-0 divide-y divide-gray-200 dark:divide-gray-700">
                        {activities.map((activity) => {
                            const styles = getUrgencyStyles(activity.urgency);
                            return (
                                <li key={activity.id} className={`p-5 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 ${styles.border}`}>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white m-0">{activity.title}</h4>
                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles.badge}`}>
                                                    {activity.urgency}
                                                </span>
                                            </div>
                                            {activity.description && (
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{activity.description}</p>
                                            )}
                                        </div>
                                        <div className="flex flex-col items-start md:items-end gap-2">
                                            <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                                                activity.status === 'Completada' 
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400' 
                                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400'
                                            }`}>
                                                {activity.status}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                🗓️ {activity.date} a las {activity.time}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default ActivityList;
import React from 'react';
import TaskForm from './TaskForm';

const ActivityList = ({ 
    activities, 
    statusFilter, 
    urgencyFilter, 
    onStatusChange, 
    onUrgencyChange, 
    onAddTask,
    onCompleteTask
}) => {

    // Determina el color del borde y badge según la urgencia
    const getUrgencyStyles = (urgency) => {
        switch (urgency.toLowerCase()) {
            case 'bajo':
                return { border: 'border-l-4 border-green-600', text: 'text-green-600' };
            case 'medio':
                return { border: 'border-l-4 border-yellow-600', text: 'text-yellow-600' };
            case 'alto':
                return { border: 'border-l-4 border-red-600', text: 'text-red-600' };
            default:
                return { border: 'border-l-4 border-gray-600', text: 'text-gray-600' };
        }
    };

    return (
        <section className="mt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Tareas Asignadas</h2>
                
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-bold text-gray-800 dark:text-white">Estado:</label>
                        <select 
                            value={statusFilter} 
                            onChange={(e) => onStatusChange(e.target.value)}
                            className="p-2 border-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-white text-sm"
                        >
                            <option value="Todos">Todos</option>
                            <option value="Pendiente">Pendiente</option>
                            <option value="Completada">Completada</option>
                        </select>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-bold text-gray-800 dark:text-white">Urgencia:</label>
                        <select 
                            value={urgencyFilter} 
                            onChange={(e) => onUrgencyChange(e.target.value)}
                            className="p-2 border-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-white text-sm"
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

            <div className="border-2 border-gray-300 dark:border-gray-600">
                {activities.length === 0 ? (
                    <div className="p-8 text-center text-gray-800 dark:text-gray-200">
                        No hay tareas que coincidan con los filtros actuales.
                    </div>
                ) : (
                    <ul className="list-none p-0 m-0 divide-y-2 divide-gray-300 dark:divide-gray-600">
                        {activities.map((activity) => {
                            const styles = getUrgencyStyles(activity.urgency);
                            return (
                                <li key={activity.id} className={`p-4 ${styles.border}`}>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white m-0">{activity.title}</h4>
                                                <span className={`text-sm font-bold uppercase ${styles.text}`}>
                                                    [{activity.urgency}]
                                                </span>
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
                                                <button 
                                                    onClick={() => onCompleteTask(activity.id)}
                                                    className="px-4 py-1 border-2 border-green-600 bg-green-600 text-white font-bold hover:bg-green-700 transition-colors"
                                                >
                                                    Marcar Completada
                                                </button>
                                            )}
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
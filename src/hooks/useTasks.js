import { useState, useMemo } from 'react';
import { initialActivities } from '../data/data';

export function useTasks(activeUserId) {
  const [activities, setActivities] = useState(initialActivities);
  const [statusFilter, setStatusFilter]   = useState('Todos');   // 'Todos' | 'Pendiente' | 'Completada'
  const [urgencyFilter, setUrgencyFilter] = useState('Todos');   // 'Todos' | 'Alto' | 'Medio' | 'Bajo'

  const userActivities = useMemo(
    () => activities.filter(a => a.userId === activeUserId),
    [activities, activeUserId]
  );

  const filteredActivities = useMemo(() => {
    return userActivities
      .filter(a => statusFilter  === 'Todos' || a.status  === statusFilter)
      .filter(a => urgencyFilter === 'Todos' || a.urgency === urgencyFilter);
  }, [userActivities, statusFilter, urgencyFilter]);

  const stats = useMemo(() => ({
    total:      userActivities.length,
    pendiente:  userActivities.filter(a => a.status === 'Pendiente').length,
    completada: userActivities.filter(a => a.status === 'Completada').length,
  }), [userActivities]);

  const addTask = (newTask) =>
    setActivities(prev => [...prev, { ...newTask, id: Date.now(), userId: activeUserId, status: 'Pendiente' }]);

  return { filteredActivities, stats, statusFilter, setStatusFilter, urgencyFilter, setUrgencyFilter, addTask };
}

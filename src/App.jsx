import { useState } from 'react';
import ActivityList from './components/ActivityList.jsx'
import ActivityForm from './components/ActivityForm.jsx'

function App() {

  const [activities, setActivities] = useState([
    {
      title: 'Sacar la basura',
      urgency: 'Alto',
      status: 'Pendiente',
      date: '2026-06-15',
      time: '09:30'
    },
    {
      title: 'Lavar la ropa',
      urgency: 'Medio',
      status: 'Pendiente',
      date: '2026-06-02',
      time: '14:30'
    },
    {
      title: 'Hacer la cama',
      urgency: 'Bajo',
      status: 'Realizado',
      date: '2026-05-30',
      time: '07:00'
    }
  ]);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  return (
    <div>
      <h1>Dashboard de actividades (To-Do)</h1>

      <ActivityForm onAddActivity={handleAddActivity} />

      <ActivityList
        listTitle="Tareas asignadas"
        activities={activities}
      />
    </div>
  );
};

export default App

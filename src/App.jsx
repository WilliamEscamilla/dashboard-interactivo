import { useState } from 'react';
import ActivityList from './components/ActivityList.jsx'
import ActivityForm from './components/ActivityForm.jsx'
import { initialActivities } from './data/data.js'

function App() {

  const [activities, setActivities] = useState(initialActivities);

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

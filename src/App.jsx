import { useState, useEffect } from 'react';
import { users } from './data/data';
import { useTasks } from './hooks/useTasks';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UserPanel from './components/UserPanel';
import StatsPanel from './components/StatsPanel';
import ActivityList from './components/ActivityList';
import './App.css';

function App() {
  const [activeUser, setActiveUser] = useState(users[0]);
  const [theme, setTheme] = useState('light');
  
  // Custom hook encapsula lógica de tareas y filtros
  const { 
    filteredActivities, 
    stats, 
    statusFilter, 
    setStatusFilter, 
    urgencyFilter, 
    setUrgencyFilter, 
    addTask 
  } = useTasks(activeUser.id);

  // Aplica clase .dark al body para Tailwind dark mode
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors ${theme}`}>
      <Sidebar />
      
      <main className="flex-1 flex flex-col w-full min-w-0">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <UserPanel 
              users={users} 
              activeUser={activeUser} 
              onSelect={setActiveUser} 
            />
            
            <StatsPanel stats={stats} />
            
            <ActivityList
              activities={filteredActivities}
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              urgencyFilter={urgencyFilter}
              onUrgencyChange={setUrgencyFilter}
              onAddTask={addTask}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

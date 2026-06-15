import { useState, useEffect } from 'react';
import { users } from './data/data';
import { useTasks } from './hooks/useTasks';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import UserPanel from './components/UserPanel/UserPanel';
import StatsPanel from './components/StatsPanel/StatsPanel';
import ActivityList from './components/ActivityList/ActivityList';

function App() {
  const [activeUser, setActiveUser] = useState(users[0]);
  const [theme, setTheme]           = useState('light');
  const [activeTab, setActiveTab]   = useState('Dashboard');

  const {
    filteredActivities,
    stats,
    statusFilter,
    setStatusFilter,
    urgencyFilter,
    setUrgencyFilter,
    addTask,
    completeTask,
  } = useTasks(activeUser.id);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className={`flex min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors ${theme}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 flex flex-col w-full min-w-0">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <UserPanel users={users} activeUser={activeUser} onSelect={setActiveUser} />

            {(activeTab === 'Dashboard' || activeTab === 'Estadisticas') && (
              <StatsPanel stats={stats} />
            )}

            {(activeTab === 'Dashboard' || activeTab === 'Tareas') && (
              <ActivityList
                activities={filteredActivities}
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                urgencyFilter={urgencyFilter}
                onUrgencyChange={setUrgencyFilter}
                onAddTask={addTask}
                onCompleteTask={completeTask}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

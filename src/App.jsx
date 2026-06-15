import { useState, useEffect } from 'react';
import { useTasks } from './hooks/useTasks';
import { useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import UserPanel from './components/UserPanel/UserPanel';
import StatsPanel from './components/StatsPanel/StatsPanel';
import ActivityList from './components/ActivityList/ActivityList';
import Login from './components/Login/Login';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';
import SwitchUserModal from './components/SwitchUserModal/SwitchUserModal';

function App() {
  const { loggedInUser } = useAuth();
  const [theme, setTheme]         = useState('light');
  const [activeTab, setActiveTab] = useState('Dashboard');

  const {
    filteredActivities,
    stats,
    statusFilter,
    setStatusFilter,
    urgencyFilter,
    setUrgencyFilter,
    addTask,
    completeTask,
  } = useTasks(loggedInUser?.id);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  if (!loggedInUser) return <Login />;

  return (
    <div className={`flex min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors ${theme}`}>
      <WelcomeModal />
      <SwitchUserModal />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 flex flex-col w-full min-w-0">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <UserPanel />

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

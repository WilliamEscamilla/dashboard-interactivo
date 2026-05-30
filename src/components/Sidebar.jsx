import React from 'react';

const Sidebar = ({ activeTab = 'Dashboard', setActiveTab }) => {
  const menuItems = [
    { id: 'Dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'Tareas', icon: '📝', label: 'Mis Tareas' },
    { id: 'Estadisticas', icon: '📈', label: 'Estadísticas' },
    { id: 'Ajustes', icon: '⚙️', label: 'Ajustes' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen hidden md:flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-accent dark:text-purple-400 m-0 flex items-center gap-2">
          <span>🚀</span> TaskMaster
        </h2>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2 list-none p-0 m-0">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab && setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  activeTab === item.id
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Plan Pro</p>
          <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm transition-colors">
            Actualizar
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

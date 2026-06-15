const SidebarView = ({ menuItems, activeTab, setActiveTab }) => (
  <aside className="w-64 border-r-2 border-gray-300 dark:border-gray-600 h-screen hidden md:flex flex-col">
    <div className="p-4 border-b-2 border-gray-300 dark:border-gray-600">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white m-0">
        TaskOrganizer:<br />EL WESO
      </h2>
    </div>

    <nav className="flex-1 p-4">
      <ul className="space-y-2 list-none p-0 m-0">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab && setActiveTab(item.id)}
              className={`w-full text-left p-2 border-2 ${activeTab === item.id
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-bold'
                  : 'border-transparent text-gray-700 dark:text-gray-300'
                }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

export default SidebarView;
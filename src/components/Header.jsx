import React, { useState, useEffect } from 'react';

const Header = ({ theme, onToggleTheme }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Dashboard de Tareas</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 m-0 capitalize">{formatDate(currentTime)}</p>
      </div>
      <button
        onClick={onToggleTheme}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-2xl"
        title={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

export default Header;

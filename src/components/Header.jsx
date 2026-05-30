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
    <header className="flex justify-between items-center p-4 border-b-2 border-gray-300 dark:border-gray-600">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Dashboard de Tareas</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 m-0 capitalize">{formatDate(currentTime)}</p>
      </div>
      <button
        onClick={onToggleTheme}
        className="px-4 py-2 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white font-bold"
      >
        {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </header>
  );
};

export default Header;

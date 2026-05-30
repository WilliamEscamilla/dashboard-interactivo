import React from 'react';

const Card = React.memo(({ title, value, icon, color }) => (
  <div className={`card border-l-4 ${color} bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm flex items-center space-x-4`}>
    <div className="text-3xl">{icon}</div>
    <div className="text-left">
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
    </div>
  </div>
));

export default Card;

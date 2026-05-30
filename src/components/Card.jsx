import React from 'react';

const Card = React.memo(({ title, value, color }) => (
  <div className={`border-2 ${color} p-4 flex flex-col justify-center items-center`}>
    <p className="text-gray-600 dark:text-gray-400 font-bold mb-2">{title}</p>
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white m-0">{value}</h3>
  </div>
));

export default Card;

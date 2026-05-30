import React from 'react';

const UserPanel = React.memo(({ users, activeUser, onSelect }) => {
  return (
    <section className="p-4 border-2 border-gray-300 dark:border-gray-600 mb-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 m-0">Seleccionar Usuario Activo</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onSelect(user)}
            className={`p-3 border-2 min-w-[200px] text-left
              ${activeUser?.id === user.id 
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-bold' 
                : 'border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200'
              }
            `}
          >
            <p className="m-0 text-lg">{user.name}</p>
            <p className="m-0 text-sm font-normal opacity-70">{user.role}</p>
          </button>
        ))}
      </div>
    </section>
  );
});

export default UserPanel;

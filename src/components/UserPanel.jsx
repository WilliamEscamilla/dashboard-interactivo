import React from 'react';

const UserPanel = React.memo(({ users, activeUser, onSelect }) => {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 m-0">Seleccionar Usuario Activo</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onSelect(user)}
            className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all min-w-[200px] text-left
              ${activeUser?.id === user.id 
                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
                : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
              }
            `}
          >
            <div className="text-3xl bg-gray-100 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center">
              {user.avatar}
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white m-0">{user.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 m-0">{user.role}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
});

export default UserPanel;

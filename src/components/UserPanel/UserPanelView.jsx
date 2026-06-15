const UserPanelView = ({ users, activeUser, onSelect }) => (
  <section className="border-2 border-gray-300 dark:border-gray-600 p-4">
    <h2 className="text-lg font-bold text-gray-800 dark:text-white m-0 mb-4">Usuarios</h2>
    <div className="flex flex-wrap gap-2">
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => onSelect(user)}
          className={`px-4 py-2 border-2 font-bold transition-colors ${activeUser.id === user.id
              ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
              : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
            }`}
        >
          {user.name}
        </button>
      ))}
    </div>
  </section>
);

export default UserPanelView;
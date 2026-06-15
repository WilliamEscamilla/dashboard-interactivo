import Button from '../ui/Button';

const HeaderView = ({ formattedDate, theme, onToggleTheme, userEmail, onLogout }) => (
  <header className="flex justify-between items-center p-4 border-b-2 border-gray-300 dark:border-gray-600">
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Dashboard de Tareas</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 m-0 capitalize">{formattedDate}</p>
    </div>

    <div className="flex items-center gap-3">
      {userEmail && (
        <span className="text-sm text-gray-600 dark:text-gray-400 hidden md:inline">{userEmail}</span>
      )}
      <Button
        label={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
        onClick={onToggleTheme}
        variant="outline"
      />
      <Button
        label="Cerrar Sesión"
        onClick={onLogout}
        variant="danger"
      />
    </div>
  </header>
);

export default HeaderView;
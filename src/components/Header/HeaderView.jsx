import Button from '../ui/Button';

const HeaderView = ({ formattedDate, theme, onToggleTheme }) => (
  <header className="flex justify-between items-center p-4 border-b-2 border-gray-300 dark:border-gray-600">
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Dashboard de Tareas</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 m-0 capitalize">{formattedDate}</p>
    </div>
    <Button
      label={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
      onClick={onToggleTheme}
      variant="outline"
    />
  </header>
);

export default HeaderView;
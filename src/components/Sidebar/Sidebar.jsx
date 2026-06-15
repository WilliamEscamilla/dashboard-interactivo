import SidebarView from './SidebarView';

const MENU_ITEMS = [
  { id: 'Dashboard', label: 'Dashboard' },
  { id: 'Tareas', label: 'Mis Tareas' },
  { id: 'Estadisticas', label: 'Estadísticas' },
];

const Sidebar = ({ activeTab, setActiveTab }) => (
  <SidebarView
    menuItems={MENU_ITEMS}
    activeTab={activeTab}
    setActiveTab={setActiveTab}
  />
);

export default Sidebar;
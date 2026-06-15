import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import HeaderView from './HeaderView';

const Header = ({ theme, onToggleTheme }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { user, logout } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <HeaderView
      formattedDate={formattedDate}
      theme={theme}
      onToggleTheme={onToggleTheme}
      userEmail={user?.email}
      onLogout={logout}
    />
  );
};

export default Header;
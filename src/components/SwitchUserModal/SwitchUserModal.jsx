import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import SwitchUserModalView from './SwitchUserModalView';

const SwitchUserModal = () => {
  const { pendingSwitchUser, switchError, confirmSwitchUser, cancelSwitchUser } = useAuth();
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!pendingSwitchUser) setPassword('');
  }, [pendingSwitchUser]);

  if (!pendingSwitchUser) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmSwitchUser(password);
  };

  return (
    <SwitchUserModalView
      user={pendingSwitchUser}
      password={password}
      error={switchError}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleSubmit}
      onCancel={cancelSwitchUser}
    />
  );
};

export default SwitchUserModal;

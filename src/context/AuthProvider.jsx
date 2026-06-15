import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { initialUsers } from '../data/data';

export const AuthProvider = ({ children }) => {
  const [users, setUsers]                         = useState(initialUsers);
  const [loggedInUser, setLoggedInUser]           = useState(null);
  const [showWelcomeModal, setShowWelcomeModal]   = useState(false);
  const [pendingSwitchUser, setPendingSwitchUser] = useState(null);
  const [loginError, setLoginError]               = useState('');
  const [switchError, setSwitchError]             = useState('');

  const login = (email, password) => {
    const existing = users.find((u) => u.email === email);

    if (existing) {
      if (existing.password !== password) {
        setLoginError('Contraseña incorrecta.');
        return;
      }
      setLoggedInUser(existing);
    } else {
      if (!password.trim()) {
        setLoginError('La contraseña no puede estar vacía.');
        return;
      }
      const newUser = {
        id: Date.now(),
        name: email.split('@')[0],
        role: 'Usuario',
        email,
        password,
      };
      setUsers((prev) => [...prev, newUser]);
      setLoggedInUser(newUser);
    }

    setLoginError('');
    setShowWelcomeModal(true);
  };

  const logout = () => {
    setLoggedInUser(null);
    setLoginError('');
    setSwitchError('');
  };

  const closeModal = () => setShowWelcomeModal(false);

  const initiateSwitchUser = (user) => {
    setSwitchError('');
    setPendingSwitchUser(user);
  };

  const cancelSwitchUser = () => {
    setPendingSwitchUser(null);
    setSwitchError('');
  };

  const confirmSwitchUser = (password) => {
    if (pendingSwitchUser.password !== password) {
      setSwitchError('Contraseña incorrecta.');
      return;
    }
    setLoggedInUser(pendingSwitchUser);
    setPendingSwitchUser(null);
    setSwitchError('');
    setShowWelcomeModal(true);
  };

  return (
    <AuthContext.Provider value={{
      users,
      loggedInUser,
      showWelcomeModal,
      pendingSwitchUser,
      loginError,
      switchError,
      login,
      logout,
      closeModal,
      initiateSwitchUser,
      cancelSwitchUser,
      confirmSwitchUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

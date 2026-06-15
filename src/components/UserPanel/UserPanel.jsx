import { useAuth } from '../../context/AuthContext';
import UserPanelView from './UserPanelView';

const UserPanel = () => {
  const { users, loggedInUser, initiateSwitchUser } = useAuth();

  return (
    <UserPanelView
      users={users}
      activeUser={loggedInUser}
      onSelect={initiateSwitchUser}
    />
  );
};

export default UserPanel;
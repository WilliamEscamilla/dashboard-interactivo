import UserPanelView from './UserPanelView';

const UserPanel = ({ users, activeUser, onSelect }) => (
  <UserPanelView
    users={users}
    activeUser={activeUser}
    onSelect={onSelect}
  />
);

export default UserPanel;
import { useAuth } from '../../context/AuthContext';
import WelcomeModalView from './WelcomeModalView';

const WelcomeModal = () => {
  const { loggedInUser, showWelcomeModal, closeModal } = useAuth();

  if (!showWelcomeModal) return null;

  return <WelcomeModalView email={loggedInUser?.email} onClose={closeModal} />;
};

export default WelcomeModal;

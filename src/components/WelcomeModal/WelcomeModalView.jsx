import Button from '../ui/Button';

const WelcomeModalView = ({ email, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
    <div className="bg-white dark:bg-black border-2 border-gray-800 dark:border-white p-8 w-full max-w-sm">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white m-0 mb-2">¡Bienvenido/a!</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 m-0">{email}</p>
      <Button label="Cerrar" onClick={onClose} variant="outline" />
    </div>
  </div>
);

export default WelcomeModalView;

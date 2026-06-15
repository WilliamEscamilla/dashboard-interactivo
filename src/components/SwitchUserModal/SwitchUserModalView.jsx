import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';

const SwitchUserModalView = ({ user, password, error, onPasswordChange, onSubmit, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
    <div className="bg-white dark:bg-black border-2 border-gray-800 dark:border-white p-8 w-full max-w-sm">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white m-0 mb-6">
        Cambiar a {user.name}
      </h2>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="switch-email">Correo</Label>
          <Input
            id="switch-email"
            type="email"
            value={user.email}
            disabled
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="switch-password">Contraseña</Label>
          <Input
            id="switch-password"
            name="switch-password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="••••••••"
            required
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm font-bold m-0">{error}</p>
        )}

        <div className="flex gap-3 mt-2">
          <Button label="Confirmar" type="submit" variant="primary" />
          <Button label="Cancelar" onClick={onCancel} variant="outline" />
        </div>
      </form>
    </div>
  </div>
);

export default SwitchUserModalView;

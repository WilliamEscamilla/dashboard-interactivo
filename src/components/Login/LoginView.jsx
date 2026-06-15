import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';

const LoginView = ({ form, onChange, onSubmit, error }) => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <div className="w-full max-w-sm border-2 border-gray-300 dark:border-gray-600 p-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white m-0 mb-8">Iniciar Sesión</h1>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="correo@ejemplo.com"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            placeholder="••••••••"
            required
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm font-bold m-0">{error}</p>
        )}

        <div className="mt-2">
          <Button label="Iniciar Sesión" type="submit" variant="primary" />
        </div>
      </form>
    </div>
  </div>
);

export default LoginView;

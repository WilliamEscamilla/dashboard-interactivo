import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import LoginView from './LoginView';

const INITIAL_STATE = { email: '', password: '' };

const Login = () => {
  const [form, setForm] = useState(INITIAL_STATE);
  const { login, loginError } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.email, form.password);
  };

  return (
    <LoginView
      form={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
      error={loginError}
    />
  );
};

export default Login;

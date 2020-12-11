import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../../services/loginService';
import useAuthentication from '../useAuthentication';
import LoginForm from './LoginForm';

export default () => {
  const formControl = useForm({ mode: 'onBlur' });
  const { errors } = formControl;
  const { setToken } = useAuthentication();

  const onSubmit = async (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }
    const { username, password } = data;
    const res = await login(username, password);

    if (res.error) {
      console.log(`Login failed: ${res.error.response.data.message}`, 'error');

      return;
    }

    const { data: { accessToken } } = res;
    setToken(accessToken);
    console.log('You were logged in!');
  };

  return <LoginForm formControl={formControl} onSubmit={onSubmit} />;
};

import React from 'react';
import { string } from 'prop-types';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';
import { login } from '../../../services/loginService';
import useAuthentication from '../useAuthentication';
import LoginView from './LoginView';
import ADMIN_ROUTES from '../../Admin/routes';

const Login = () => {
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
    navigate(ADMIN_ROUTES.INDEX, { replace: true });
  };

  return <LoginView formControl={formControl} onSubmit={onSubmit} />;
};

Login.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
};

export default Login;

import React from 'react';
import { string } from 'prop-types';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';
import useAuthentication from '../useAuthentication';
import LoginView from './LoginView';
import ADMIN_ROUTES from '../../Admin/routes';
import useNotification from '../../GlobalNotification/useNotification';

const Login = () => {
  const formControl = useForm({ mode: 'onBlur' });
  const { errors } = formControl;
  const { login } = useAuthentication();
  const { setNotification } = useNotification();

  const onSubmit = async (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }
    const { username, password } = data;

    try {
      await login(username, password);
    } catch (error) {
      setNotification(`Login failed: ${error.response.data.message}`, 'error');
      return;
    }

    setNotification('You were logged in!', 'info', true);
    navigate(ADMIN_ROUTES.INDEX, { replace: true });
  };

  return <LoginView formControl={formControl} onSubmit={onSubmit} />;
};

Login.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
};

export default Login;

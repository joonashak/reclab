import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import { node } from 'prop-types';
import jwt from 'jsonwebtoken';
import { navigate } from 'gatsby';
import tokenStore from './tokenStore';
import loginService from '../../services/loginService';
import LoadingModal from '../Admin/LoadingModal';
import adminRoutes from '../Admin/adminRoutes';

const AuthenticationContext = createContext([[], () => {}]);

const AuthenticationProvider = ({ children }) => {
  const [state, setState] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = await tokenStore.getToken();

      setState(token);

      // Show login prompt immediately if no token found.
      if (!token) {
        navigate(adminRoutes.login.fullPath);
      }

      // Validate token against backend.
      if (token && !await loginService.validateToken(token)) {
        tokenStore.setToken('');
        navigate(adminRoutes.login.fullPath);
      }

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <LoadingModal />;
  }

  return (
    <AuthenticationContext.Provider value={[state, setState]}>
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: node.isRequired,
};

export { AuthenticationProvider };

export default () => {
  const [state, setState] = useContext<any>(AuthenticationContext);

  const setToken = async (token: string) => {
    await tokenStore.setToken(token);
    setState(token);
  };

  const login = async (username: string, password: string): Promise<void> => {
    const result = await loginService.login(username, password);
    const { data: { accessToken } } = result;
    await setToken(accessToken);
  };

  const logout = () => setToken('');

  const getUsername = () => jwt.decode(state).payload;

  return {
    token: state,
    getUsername,
    logout,
    login,
  };
};

import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import { node } from 'prop-types';
import jwt from 'jsonwebtoken';
import { navigate } from 'gatsby';
import tokenStore from './tokenStore';
import { validateToken } from '../../services/loginService';
import LoadingModal from '../Admin/LoadingModal';
import ADMIN_ROUTES from '../Admin/routes';

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
        navigate(ADMIN_ROUTES.LOGIN);
      }

      // Validate token against backend.
      if (token && !await validateToken(token)) {
        tokenStore.setToken('');
        navigate(ADMIN_ROUTES.LOGIN);
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

  const getUsername = () => jwt.decode(state).payload;

  const logout = () => setToken('');

  return {
    token: state,
    setToken,
    getUsername,
    logout,
  };
};

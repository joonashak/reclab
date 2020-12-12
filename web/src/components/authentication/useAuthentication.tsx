import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { navigate } from 'gatsby';
import tokenStore from './tokenStore';
import { validateToken } from '../../services/loginService';
import LoadingModal from '../Admin/LoadingModal';

const AuthenticationContext = createContext([[], () => {}]);

const AuthenticationProvider = ({ children }) => {
  const [state, setState] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('running useAuthentication effect');
    (async () => {
      const token = await tokenStore.getToken();

      setState(token);

      // Show login prompt immediately if no token found.
      if (!token) {
        navigate('/admin/login');
      }

      // Validate token against backend.
      if (token && !await validateToken(token)) {
        tokenStore.setToken('');
        navigate('/admin/login');
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
  children: PropTypes.node.isRequired,
};

export { AuthenticationProvider };

export default () => {
  const [state, setState] = useContext<any>(AuthenticationContext);

  const setToken = (token: string) => {
    tokenStore.setToken(token);
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

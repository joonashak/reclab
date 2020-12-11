import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import tokenStore from './tokenStore';
import Login from './Login';
import { validateToken } from '../../services/loginService';
import LoadingModal from '../Admin/LoadingModal';

const AuthenticationContext = createContext([[], () => {}]);

const AuthenticationProvider = ({ children }) => {
  const [state, setState] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await tokenStore.getToken();

      setState(token);

      // Show login prompt immediately if no token found.
      if (!token) {
        setShowLogin(true);
      }

      // Validate token against backend.
      if (token && !await validateToken(token)) {
        setShowLogin(true);
        tokenStore.setToken('');
      }

      setLoading(false);
    })();
  }, []);

  if (showLogin) {
    return <Login />;
  }

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

  return {
    token: state,
    setToken,
    getUsername,
  };
};

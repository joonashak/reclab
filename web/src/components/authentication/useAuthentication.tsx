import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import tokenStore from './tokenStore';
import Login from './Login';

const AuthenticationContext = createContext([[], () => {}]);

const AuthenticationProvider = ({ children }) => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const token = await tokenStore.getToken();

      // Use undefined to signify 'no token found' to prevent login prompt FOUC.
      setState(token || undefined);
    })();
  }, []);

  return (
    <AuthenticationContext.Provider value={[state, setState]}>
      {state === undefined ? <Login /> : children}
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

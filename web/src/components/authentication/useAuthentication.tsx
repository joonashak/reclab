import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import tokenStore from './tokenStore';

const AuthenticationContext = createContext([[], () => {}]);

const AuthenticationProvider = ({ children }) => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const token = await tokenStore.getToken();

      if (token) {
        setState(token);
      }
    })();
  }, []);

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

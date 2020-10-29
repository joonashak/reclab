import React, { useContext, createContext, useState } from 'react';
import PropTypes from 'prop-types';

type State = {
  username: string,
  token: string,
}

const defaultState: State = {
  username: null,
  token: null,
};

const AuthenticationContext = createContext([[], () => {}]);

const AuthenticationProvider = ({ children }) => {
  const [state, setState] = useState<any>(defaultState);

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

  const setUsername = (username: string) => setState((prev: State) => ({ ...prev, username }));
  const setToken = (token: string) => setState((prev: State) => ({ ...prev, token }));

  return {
    username: state.username,
    setUsername,
    token: state.token,
    setToken,
  };
};

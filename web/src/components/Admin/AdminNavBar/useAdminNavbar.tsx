import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import { node } from 'prop-types';

const defaultState = {
  title: 'Admin',
};

const AdminNavbarContext = createContext([[], () => {}]);

const AdminNavbarProvider = ({ children }) => {
  const [state, setState] = useState<any>(defaultState);

  return (
    <AdminNavbarContext.Provider value={[state, setState]}>
      {children}
    </AdminNavbarContext.Provider>
  );
};

AdminNavbarProvider.propTypes = {
  children: node.isRequired,
};

export { AdminNavbarProvider };

export default () => {
  const [state] = useContext<any>(AdminNavbarContext);
  const { title } = state;

  return {
    title,
  };
};

export const useAdminNavbarTitle = (title: string) => {
  const [state, setState] = useContext<any>(AdminNavbarContext);

  useEffect(() => {
    if (state.title === title) {
      return;
    }
    setState((prev) => ({ ...prev, title }));
  });
};

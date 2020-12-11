import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import pageService from '../../../services/pageService';
import useAuthentication from '../../authentication/useAuthentication';

const PagesContext = createContext([[], () => {}]);

const PagesProvider = ({ children }) => {
  const [state, setState] = useState<any>([]);
  const { token } = useAuthentication();

  useEffect(() => {
    if (!token) {
      return;
    }

    (async () => {
      console.log('pages query run');
      setState(await pageService.getAll(token));
    })();
  }, [token]);

  return (
    <PagesContext.Provider value={[state, setState]}>
      {children}
    </PagesContext.Provider>
  );
};

PagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PagesProvider };

export default () => {
  const [state, setState] = useContext<any>(PagesContext);
  const { token } = useAuthentication();

  const addPage = async (page): Promise<any> => {
    const { data } = await pageService.create(page, token);
    setState((prev) => prev.concat(data));
    return data;
  };

  const findPage = (id: string) => state.find((page) => page.id === id);

  return {
    pages: state,
    addPage,
    findPage,
  };
};

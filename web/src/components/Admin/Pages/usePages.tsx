import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import { node } from 'prop-types';
import pageService from '../../../services/pageService';
import useAuthentication from '../../authentication/useAuthentication';
import LoadingModal from '../LoadingModal';

const PagesContext = createContext([[], () => {}]);

const PagesProvider = ({ children }) => {
  const [state, setState] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuthentication();

  useEffect(() => {
    if (!token) {
      return;
    }

    (async () => {
      console.log('pages query run');
      setState(await pageService.getAll(token));
      setLoading(false);
    })();
  }, [token]);

  return loading ? (
    <LoadingModal />
  ) : (
    <PagesContext.Provider value={[state, setState]}>
      {children}
    </PagesContext.Provider>
  );
};

PagesProvider.propTypes = {
  children: node.isRequired,
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

  const updatePage = async (newPage): Promise<any> => {
    const { data } = await pageService.update(newPage, token);
    setState((prev) => prev.filter((page) => page.id !== newPage.id).concat(data));
  };

  const findPage = (id: string) => state.find((page) => page.id === id);

  return {
    pages: state,
    addPage,
    findPage,
    updatePage,
  };
};

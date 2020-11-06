import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import pageService from '../../../services/pageService';

const PagesContext = createContext([[], () => {}]);

const PagesProvider = ({ children, token }) => {
  const [state, setState] = useState<any>([]);

  useEffect(() => {
    (async () => {
      console.log('pages query run');
      setState(await pageService.getAll(token));
    })();
  }, []);

  return (
    <PagesContext.Provider value={[state, setState]}>
      {children}
    </PagesContext.Provider>
  );
};

PagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
  token: PropTypes.string,
};

PagesProvider.defaultProps = {
  token: '',
};

export { PagesProvider };

export default () => {
  const [state, setState] = useContext<any>(PagesContext);

  const setPages = (pages) => setState(pages);

  return {
    pages: state,
    setPages,
  };
};

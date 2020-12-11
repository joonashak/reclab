import { Router } from '@reach/router';
import PropTypes from 'prop-types';
import React from 'react';
import NewPage from './NewPage';
import PageList from './PageList';
import { PagesProvider } from './usePages';
import EditPage from './EditPage';

const Pages = () => (
  <PagesProvider>
    <Router>
      <PageList path="/" default />
      <NewPage path="/new" />
      <EditPage path="/edit/:pageId" />
    </Router>
  </PagesProvider>
);

Pages.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: PropTypes.string.isRequired,
};

export default Pages;

import { Router } from '@reach/router';
import React from 'react';
import NewPage from './NewPage';
import PageList from './PageList';
import { PagesProvider } from './usePages';

export default () => (
  <PagesProvider>
    <Router>
      <PageList path="/" default />
      <NewPage path="/new" />
    </Router>
  </PagesProvider>
);

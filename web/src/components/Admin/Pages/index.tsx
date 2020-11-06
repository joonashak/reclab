import { Router } from '@reach/router';
import React from 'react';
import useAuthentication from '../../authentication/useAuthentication';
import NewPage from './NewPage';
import PageList from './PageList';
import { PagesProvider } from './usePages';

export default () => {
  const { token } = useAuthentication();

  return (
    <PagesProvider token={token}>
      <Router>
        <PageList path="/" default />
        <NewPage path="/new" />
      </Router>
    </PagesProvider>
  );
};

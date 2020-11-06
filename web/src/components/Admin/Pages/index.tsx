import React from 'react';
import useAuthentication from '../../authentication/useAuthentication';
import PageList from './PageList';
import { PagesProvider } from './usePages';

export default () => {
  const { token } = useAuthentication();

  return (
    <PagesProvider token={token}>
      <PageList />
    </PagesProvider>
  );
};

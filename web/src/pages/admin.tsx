import React from 'react';
import { AuthenticationProvider } from '../components/authentication/useAuthentication';

export default () => (
  <AuthenticationProvider>
    {
      // Mount provider here so that it does not unnecessarily bloat public views!
    }
    admin
  </AuthenticationProvider>
);

import React from 'react';
import { Router } from '@reach/router';
import { AuthenticationProvider } from '../components/authentication/useAuthentication';
import Admin from '../components/Admin';
import Pages from '../components/Admin/Pages';
import AdminWrapper from '../components/Admin/AdminWrapper';

export default () => (
  <AuthenticationProvider>
    <Router>
      <AdminWrapper path="/admin">
        <Admin path="/" default />
        <Pages path="/pages" />
      </AdminWrapper>
    </Router>
  </AuthenticationProvider>
);

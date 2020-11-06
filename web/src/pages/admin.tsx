import React from 'react';
import { Router } from '@reach/router';
import { AuthenticationProvider } from '../components/authentication/useAuthentication';
import Route from '../components/Route';
import Admin from '../components/Admin';

export default () => (
  <AuthenticationProvider>
    <Router basepath="/admin">
      <Route path="/" default component={<Admin />} />
    </Router>
  </AuthenticationProvider>
);

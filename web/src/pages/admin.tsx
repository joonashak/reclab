import React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from '@material-ui/core';
import { AuthenticationProvider } from '../components/authentication/useAuthentication';
import Admin from '../components/Admin';
import Pages from '../components/Admin/Pages';
import AdminWrapper from '../components/Admin/AdminWrapper';
import adminTheme from '../themes/adminTheme';
import Login from '../components/authentication/Login';

export default () => (
  <ThemeProvider theme={adminTheme}>
    <AuthenticationProvider>
      <Router>
        <AdminWrapper path="/admin">
          <Admin path="/" default />
          <Pages path="/pages/*" />
          <Login path="/login" />
        </AdminWrapper>
      </Router>
    </AuthenticationProvider>
  </ThemeProvider>
);

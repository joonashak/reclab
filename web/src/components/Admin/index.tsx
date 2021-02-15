import React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from '@material-ui/core';
import adminTheme from '../../themes/adminTheme';
import { NotificationProvider } from '../GlobalNotification/useNotification';
import { AuthenticationProvider } from '../authentication/useAuthentication';
import AdminRouteWrapper from './AdminRouteWrapper';
import Dashboard from './Dashboard';
import Pages from './Pages/index';
import Login from '../authentication/Login/index';
import Documentation from './Documentation/index';
import GlobalNotification from '../GlobalNotification';
import adminRoutes from './adminRoutes';

export default () => (
  <ThemeProvider theme={adminTheme}>
    <NotificationProvider>
      <AuthenticationProvider>
        <Router>
          <AdminRouteWrapper path={adminRoutes.root}>
            <Dashboard path="/" default />
            <Pages path="/pages/*" />
            <Login path="/login" />
            <Documentation path="/docs" />
          </AdminRouteWrapper>
        </Router>
        <GlobalNotification />
      </AuthenticationProvider>
    </NotificationProvider>
  </ThemeProvider>
);

import React from 'react';
import AdminNavBar from '../components/admin/AdminNavBar';
import { AuthenticationProvider } from '../components/authentication/useAuthentication';

export default () => (
  <AuthenticationProvider>
    <AdminNavBar />
    admin
  </AuthenticationProvider>
);

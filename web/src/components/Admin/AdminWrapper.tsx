import React from 'react';
import { node, string } from 'prop-types';
import AdminNavBar from './AdminNavbar';
import { AdminNavbarProvider } from './AdminNavbar/useAdminNavbar';

const AdminWrapper = ({ children }) => (
  <AdminNavbarProvider>
    <AdminNavBar />
    {children}
  </AdminNavbarProvider>
);

AdminWrapper.propTypes = {
  children: node.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
};

export default AdminWrapper;

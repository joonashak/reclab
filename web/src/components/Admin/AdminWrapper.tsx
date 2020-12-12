import React from 'react';
import { node, string } from 'prop-types';
import AdminNavBar from './AdminNavBar';

const AdminWrapper = ({ children }) => (
  <>
    <AdminNavBar />
    {children}
  </>
);

AdminWrapper.propTypes = {
  children: node.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
};

export default AdminWrapper;

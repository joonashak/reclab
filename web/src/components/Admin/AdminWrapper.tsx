import React from 'react';
import PropTypes from 'prop-types';
import AdminNavBar from './AdminNavBar';

const AdminWrapper = ({ children }) => (
  <>
    <AdminNavBar />
    {children}
  </>
);

AdminWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminWrapper;

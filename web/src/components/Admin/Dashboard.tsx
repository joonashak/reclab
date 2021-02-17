import React from 'react';
import { string, bool } from 'prop-types';
import { useAdminNavbarTitle } from './AdminNavbar/useAdminNavbar';

const Dashboard = () => {
  useAdminNavbarTitle('Admin');

  return (
    <>
      admin
    </>
  );
};

Dashboard.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  default: bool,
};

Dashboard.defaultProps = {
  default: false,
};

export default Dashboard;

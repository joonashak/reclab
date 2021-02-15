import React from 'react';
import { string, bool } from 'prop-types';
import { Helmet } from 'react-helmet';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Admin</title>
    </Helmet>
    admin
  </>
);

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

import React from 'react';
import { string, bool } from 'prop-types';

const Admin = () => (
  <>
    admin
  </>
);

Admin.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  default: bool,
};

Admin.defaultProps = {
  default: false,
};

export default Admin;

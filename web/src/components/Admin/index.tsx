import React from 'react';
import PropTypes from 'prop-types';

const Admin = () => (
  <>
    admin
  </>
);

Admin.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  default: PropTypes.bool,
};

Admin.defaultProps = {
  default: false,
};

export default Admin;

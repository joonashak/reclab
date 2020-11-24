import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Center = ({ children }) => <Typography align="center">{children}</Typography>;

Center.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Center;

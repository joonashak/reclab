import React from 'react';
import { node } from 'prop-types';
import { Typography } from '@material-ui/core';

const Center = ({ children }) => <Typography align="center">{children}</Typography>;

Center.propTypes = {
  children: node.isRequired,
};

export default Center;

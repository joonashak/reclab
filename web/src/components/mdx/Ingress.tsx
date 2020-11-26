import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Ingress = ({ children }) => <Typography variant="caption">{children}</Typography>;

Ingress.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Ingress;

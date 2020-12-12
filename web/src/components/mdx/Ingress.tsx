import React from 'react';
import { node } from 'prop-types';
import { Typography } from '@material-ui/core';

const Ingress = ({ children }) => <Typography variant="caption">{children}</Typography>;

Ingress.propTypes = {
  children: node.isRequired,
};

export default Ingress;

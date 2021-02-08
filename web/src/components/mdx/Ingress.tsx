import React from 'react';
import { node } from 'prop-types';
import { Typography } from '@material-ui/core';
import ContentPanel from '../common/ContentPanel';

const Ingress = ({ children }) => (
  <ContentPanel>
    <Typography variant="caption">{children}</Typography>
  </ContentPanel>
);

Ingress.propTypes = {
  children: node.isRequired,
};

export default Ingress;

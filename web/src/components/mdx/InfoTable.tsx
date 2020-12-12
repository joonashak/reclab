import React from 'react';
import { node, string } from 'prop-types';
import { Typography } from '@material-ui/core';

const InfoTable = ({ children, title }) => (
  <>
    {title && <Typography variant="h4">{title}</Typography>}
    <table>{children}</table>
  </>
);

InfoTable.propTypes = {
  children: node.isRequired,
  title: string,
};

InfoTable.defaultProps = {
  title: null,
};

export default InfoTable;

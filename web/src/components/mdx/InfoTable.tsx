import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const InfoTable = ({ children, title }) => (
  <>
    {title && <Typography variant="h4">{title}</Typography>}
    <table>{children}</table>
  </>
);

InfoTable.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

InfoTable.defaultProps = {
  title: null,
};

export default InfoTable;

import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const H1 = ({ children }) => <Typography variant="h1">{children}</Typography>;
H1.propTypes = propTypes;

const H2 = ({ children }) => <Typography variant="h2">{children}</Typography>;
H2.propTypes = propTypes;

const H3 = ({ children }) => <Typography variant="h3">{children}</Typography>;
H3.propTypes = propTypes;

const H4 = ({ children }) => <Typography variant="h4">{children}</Typography>;
H4.propTypes = propTypes;

const H5 = ({ children }) => <Typography variant="h5">{children}</Typography>;
H5.propTypes = propTypes;

const H6 = ({ children }) => <Typography variant="h6">{children}</Typography>;
H6.propTypes = propTypes;

export default {
  H1, H2, H3, H4, H5, H6,
};

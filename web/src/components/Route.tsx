/* eslint react/no-unused-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Mimics react-router style because I do not want to write up reach-router's prop-types in every
 * view component. It is stupid. (Including react-router would unnecessarily bloat the bundle as
 * Gatsby uses reach anyway.)
 */
const Route = ({ component }) => <>{component}</>;

Route.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  default: PropTypes.bool,
};

Route.defaultProps = {
  default: false,
};

export default Route;

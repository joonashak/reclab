import { Link } from 'gatsby-theme-material-ui';
import React from 'react';
import { node, string } from 'prop-types';

const LogoLinkWrapper = ({ children, className }) => (
  <Link to="/" className={className}>
    {children}
  </Link>
);

LogoLinkWrapper.propTypes = {
  children: node.isRequired,
  className: string,
};

LogoLinkWrapper.defaultProps = {
  className: null,
};

export default LogoLinkWrapper;

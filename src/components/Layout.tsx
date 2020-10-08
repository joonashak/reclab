import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar/index';

const Layout = ({ page, children }) => (
  <div>
    <NavBar page={page} />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;

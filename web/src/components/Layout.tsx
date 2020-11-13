import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import NavBar from './NavBar/index';

const Layout = ({ page, children }) => (
  <div>
    <NavBar page={page} />
    <Container>
      {children}
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;

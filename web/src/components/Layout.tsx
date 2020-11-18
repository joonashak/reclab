import React from 'react';
import PropTypes from 'prop-types';
import { Container, ThemeProvider } from '@material-ui/core';
import NavBar from './NavBar/index';
import theme from '../themes/theme';

const Layout = ({ page, children }) => (
  <ThemeProvider theme={theme}>
    <NavBar page={page} />
    <Container>
      {children}
    </Container>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;

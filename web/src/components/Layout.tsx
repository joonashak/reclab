import React from 'react';
import { node, shape, string } from 'prop-types';
import { Container, ThemeProvider } from '@material-ui/core';
import NavBar from './NavBar/index';
import theme from '../themes/theme';
import BackgroundImage from './BackgroundImage';

const Layout = ({ page, children }) => (
  <ThemeProvider theme={theme}>
    <NavBar page={page} />
    <BackgroundImage />
    <Container>
      {children}
    </Container>
  </ThemeProvider>
);

Layout.propTypes = {
  children: node.isRequired,
  page: shape({
    language: string.isRequired,
  }).isRequired,
};

export default Layout;

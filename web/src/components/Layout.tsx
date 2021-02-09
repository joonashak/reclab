import React from 'react';
import { node, shape, string } from 'prop-types';
import { ThemeProvider } from '@material-ui/core';
import NavBar from './NavBar/index';
import theme from '../themes/theme';
import Footer from './Footer';

const Layout = ({ page, children }) => (
  <ThemeProvider theme={theme}>
    <NavBar page={page} />
    {children}
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
  children: node.isRequired,
  page: shape({
    language: string.isRequired,
  }).isRequired,
};

export default Layout;

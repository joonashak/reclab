import React from 'react';
import { node, shape, string } from 'prop-types';
import { Container, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar/index';
import theme from '../themes/theme';
import Footer from './Footer';

const usestyles = makeStyles({
  container: {
    backgroundColor: '#ffffffa8',
    overflow: 'auto',
    paddingBottom: '6rem',
  },
});

const Layout = ({ page, children }) => {
  const classes = usestyles();

  return (
    <ThemeProvider theme={theme}>
      <NavBar page={page} />
      <Container className={classes.container}>
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  page: shape({
    language: string.isRequired,
  }).isRequired,
};

export default Layout;

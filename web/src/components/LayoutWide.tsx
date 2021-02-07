import React from 'react';
import { AppBar, Container, Toolbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { node } from 'prop-types';
import Menu from './NavBar/Menu';
import LanguageButton from './NavBar/LanguageSwitcher/LanguageButton';
import Footer from './Footer';

const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'relative',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > .MuiIconButton-root > .MuiIconButton-label > svg': {
      color: 'black',
      fontSize: '3rem',
    },
  },
  logo: {
    maxWidth: 1000,
    margin: '13px 15px',
    width: '70%',
  },
  container: {
    paddingBottom: '15rem',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '5rem',
    },
  },
}));

const LayoutWide = ({ children }) => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const { language } = i18n;

  return (
    <>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Menu language={language} />
          <LanguageButton path="/" />
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

LayoutWide.propTypes = {
  children: node.isRequired,
};

export default LayoutWide;

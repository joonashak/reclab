import React from 'react';
import {
  AppBar, Container, Toolbar, useMediaQuery,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { node } from 'prop-types';
import BackgroundImage from './BackgroundImage';
import Menu from './NavBar/Menu';
import Image from './mdx/Image';
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

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const logo = isMobile
    ? <Image src="logo_vertical.png" className={classes.logo} />
    : <Image src="logo_horizontal.png" className={classes.logo} />;

  return (
    <>
      <BackgroundImage>
        <AppBar position="sticky" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Menu language={language} />
            {logo}
            <LanguageButton path="/" />
          </Toolbar>
        </AppBar>
        <Container className={classes.container}>
          {children}
        </Container>
      </BackgroundImage>
      <Footer />
    </>
  );
};

LayoutWide.propTypes = {
  children: node.isRequired,
};

export default LayoutWide;

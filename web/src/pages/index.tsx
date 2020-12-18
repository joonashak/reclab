import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../components/BackgroundImage';
import Menu from '../components/NavBar/Menu/index';
import LanguageButton from '../components/NavBar/LanguageSwitcher/LanguageButton';
import Image from '../components/mdx/Image/index';

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    maxWidth: 500,
    margin: 0,
  },
});

export default () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  i18n.changeLanguage('fi');

  return (
    <BackgroundImage>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Menu language="fi" />
          <Image src="logo_horizontal.png" className={classes.logo} />
          <LanguageButton path="/" />
        </Toolbar>
      </AppBar>
      <div>
        asd
      </div>
    </BackgroundImage>
  );
};

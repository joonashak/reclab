import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from './BackgroundImage';
import Menu from './NavBar/Menu/index';
import Image from './mdx/Image/index';
import LanguageButton from './NavBar/LanguageSwitcher/LanguageButton';

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
  const { language } = i18n;

  return (
    <BackgroundImage>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Menu language={language} />
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

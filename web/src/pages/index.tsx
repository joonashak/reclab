import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import BackgroundImage from '../components/BackgroundImage';
import Menu from '../components/NavBar/Menu/index';
import LanguageButton from '../components/NavBar/LanguageSwitcher/LanguageButton';

export default () => {
  const { i18n } = useTranslation();
  i18n.changeLanguage('fi');
  return (
    <BackgroundImage>
      <AppBar position="sticky">
        <Toolbar>
          <Menu language="fi" />
          <Typography variant="h6">
            Recover Laboratory
          </Typography>
          <LanguageButton path="/" />
        </Toolbar>
      </AppBar>
      <div>
        asd
      </div>
    </BackgroundImage>
  );
};

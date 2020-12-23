import React from 'react';
import {
  AppBar, Container, Toolbar, Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from './BackgroundImage';
import Menu from './NavBar/Menu/index';
import Image from './mdx/Image/index';
import LanguageButton from './NavBar/LanguageSwitcher/LanguageButton';
import NextShowButton from './controls/HugeButton/NextShowButton';

const useStyles = makeStyles({
  appbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
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
    maxWidth: 500,
    margin: 0,
  },
  tagline: {
    fontSize: '5rem',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 100,
    lineHeight: 'normal',
    marginTop: '3rem',
  },
});

export default () => {
  const classes = useStyles();
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  return (
    <BackgroundImage>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Menu language={language} />
          <Image src="logo_horizontal.png" className={classes.logo} />
          <LanguageButton path="/" />
        </Toolbar>
      </AppBar>
      <Container>
        <Typography className={classes.tagline}>
          {t('frontpage.tagline')}
        </Typography>
        <Typography variant="subtitle1">
          Traileri tähän?
        </Typography>
        <NextShowButton />
      </Container>
    </BackgroundImage>
  );
};

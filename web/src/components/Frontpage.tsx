import React from 'react';
import {
  AppBar, Container, Toolbar, Typography, useMediaQuery,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles, Theme } from '@material-ui/core/styles';
import BackgroundImage from './BackgroundImage';
import Menu from './NavBar/Menu/index';
import Image from './mdx/Image/index';
import LanguageButton from './NavBar/LanguageSwitcher/LanguageButton';
import YouTube from './mdx/YouTube';
import HugeActionButton from './controls/HugeActionButton';

const useStyles = makeStyles({
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
    margin: 0,
    width: '70%',
  },
  tagline: {
    fontSize: '5rem',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 100,
    lineHeight: 'normal',
    marginTop: '3rem',
  },
  showreel: {
    marginTop: '4rem',
  },
});

export default () => {
  const classes = useStyles();
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const logo = isMobile
    ? <Image src="logo_vertical.png" className={classes.logo} />
    : <Image src="logo_horizontal.png" className={classes.logo} />;

  return (
    <BackgroundImage>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Menu language={language} />
          {logo}
          <LanguageButton path="/" />
        </Toolbar>
      </AppBar>
      <Container>
        <div className={classes.showreel}>
          <YouTube videoId="cKYjZHZeE-I" />
        </div>
        <Typography className={classes.tagline}>
          {t('frontpage.tagline')}
        </Typography>
        <HugeActionButton subtitle="Our next" title="Shows" />
        <HugeActionButton subtitle="Recover Laboratory" title="Shop" />
      </Container>
    </BackgroundImage>
  );
};

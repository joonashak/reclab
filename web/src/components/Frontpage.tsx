import React from 'react';
import {
  AppBar, Container, Toolbar, Typography, useMediaQuery,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles, Theme } from '@material-ui/core/styles';
import BackgroundImage from './BackgroundImage';
import Menu from './NavBar/Menu';
import Image from './mdx/Image';
import LanguageButton from './NavBar/LanguageSwitcher/LanguageButton';
import YouTube from './mdx/YouTube';
import HugeActionButton from './controls/HugeActionButton';
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
  tagline: {
    fontSize: '2rem',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 100,
    lineHeight: 'normal',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  showreel: {
    marginTop: '4rem',
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        width: '100vw',
        marginLeft: -16,
        marginRight: -16,
      },
    },
  },
  actionButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '& > button': {
        marginBottom: '1rem',
        width: '100%',
      },
    },
  },
  container: {
    paddingBottom: '15rem',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '5rem',
    },
  },
}));

export default () => {
  const classes = useStyles();
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const logo = isMobile
    ? <Image src="logo_vertical.png" className={classes.logo} />
    : <Image src="logo_horizontal.png" className={classes.logo} />;

  const showButtonPath = language === 'en'
    ? '/en/one-hundred-million-percent'
    : '/fi/satamiljoonaa-prosenttia';

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
          <Typography className={classes.tagline}>
            {t('frontpage.tagline')}
          </Typography>
          <div className={classes.showreel}>
            <YouTube videoId="_y6pnvV91-A" />
          </div>
          <div className={classes.actionButtons}>
            <HugeActionButton
              to={showButtonPath}
              subtitle={t('frontpage.showButton.subtitle')}
              title={t('frontpage.showButton.title')}
              iconSrc="palli_inv.png"
            />
            <HugeActionButton
              to="https://holvi.com/shop/recover/"
              subtitle={t('frontpage.storeButton.subtitle')}
              title={t('frontpage.storeButton.title')}
              iconSrc="mask_stay_safe.png"
            />
          </div>
        </Container>
      </BackgroundImage>
      <Footer />
    </>
  );
};

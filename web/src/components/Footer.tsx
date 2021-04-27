import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LogoInverted from './common/logo/LogoInverted/index';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    maxWidth: 'unset',
    padding: '3rem 5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingBottom: '2rem',
      '& > div': {
        marginBottom: '1.5rem',
      },
    },
  },
  logoPanel: {
    [theme.breakpoints.down('sm')]: {
      order: -1,
    },
  },
  iconButton: {
    color: 'white',
    marginRight: 20,
  },
  logo: {
    maxWidth: 300,
    margin: 0,
  },
  link: {
    color: 'white',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div>
        <div>
          <a
            href="https://www.facebook.com/recoverlaboratory"
            className={classes.iconButton}
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/recoverlaboratory/"
            className={classes.iconButton}
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UCcJLWrHP4H3scDHOeCOv2XA/videos"
            className={classes.iconButton}
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
      <div className={classes.logoPanel}>
        <LogoInverted className={classes.logo} />
      </div>
      <div>
        <div>
          <a href="mailto:hello@recoverlaboratory.com" className={classes.link}>hello@recoverlaboratory.com</a>
        </div>
      </div>
    </Container>
  );
};

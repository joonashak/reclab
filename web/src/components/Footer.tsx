import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from './common/Logo/index';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: 'black',
    color: 'white',
    width: '100vw',
    maxWidth: 'unset',
    paddingTop: '1rem',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '2rem',
    [theme.breakpoints.up('md')]: {
      marginTop: 20,
      marginBottom: 100,
    },
  },
  left: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-end',
      paddingRight: 60,
    },
  },
  right: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      paddingLeft: 60,
    },
  },
  iconButton: {
    color: 'white',
    marginRight: 20,
  },
  logo: {
    maxWidth: 300,
    margin: 0,
    marginBottom: 20,
  },
  link: {
    color: 'white',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} className={`${classes.col} ${classes.left}`}>
            <Logo className={classes.logo} />
            <div>
              <a href="mailto:hello@recoverlaboratory.com" className={classes.link}>hello@recoverlaboratory.com</a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={`${classes.col} ${classes.right}`}>
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
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

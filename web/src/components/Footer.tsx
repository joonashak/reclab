import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Image from './mdx/Image/index';

const useStyles = makeStyles({
  container: {
    backgroundColor: 'black',
    color: 'white',
    width: '100vw',
    maxWidth: 'unset',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 100,
  },
  left: {
    alignItems: 'flex-end',
    paddingRight: 60,
  },
  right: {
    alignItems: 'flex-start',
    paddingLeft: 60,
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
});

export default () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} className={`${classes.col} ${classes.left}`}>
            <Image src="logo_vertical_inv.png" className={classes.logo} />
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

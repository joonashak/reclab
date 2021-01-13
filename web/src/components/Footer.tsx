import React from 'react';
import { Container, Grid, IconButton } from '@material-ui/core';
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
              <IconButton className={classes.iconButton}>
                <FacebookIcon />
              </IconButton>
              <IconButton className={classes.iconButton}>
                <InstagramIcon />
              </IconButton>
              <IconButton className={classes.iconButton}>
                <YouTubeIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

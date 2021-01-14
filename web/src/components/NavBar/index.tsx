import React, { useEffect } from 'react';
import { shape, string } from 'prop-types';
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Menu from './Menu';
import LanguageSwitcher from './LanguageSwitcher/index';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#00000094',
    color: 'white',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    marginLeft: '2rem',
  },
});

const NavBar = ({ page }) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('navbar did mount');
    return () => console.log('navbar did unmount');
  }, []);

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <Menu language={page.language} />
        <Typography variant="h6" className={classes.title}>
          Recover Laboratory
        </Typography>
        <LanguageSwitcher page={page} />
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  page: shape({
    language: string.isRequired,
  }).isRequired,
};

export default NavBar;

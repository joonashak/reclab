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
  title: {
    flexGrow: 1,
  },
});

const NavBar = ({ page }) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('navbar did mount');
    return () => console.log('navbar did unmount');
  }, []);

  return (
    <AppBar position="sticky">
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

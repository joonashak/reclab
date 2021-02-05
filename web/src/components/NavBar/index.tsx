import React from 'react';
import { shape, string } from 'prop-types';
import {
  AppBar,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import Menu from './Menu';
import LanguageSwitcher from './LanguageSwitcher/index';
import Image from '../mdx/Image/index';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#000000',
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    // FIXME: Refactor into <Logo /> component that properly fetches the image.
    maxWidth: 250,
    margin: 0,
  },
});

const NavBar = ({ page }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Image src="logo_partial_top.png" className={classes.logo} />
        <div>
          <Menu language={page.language} />
          <LanguageSwitcher page={page} />
        </div>
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

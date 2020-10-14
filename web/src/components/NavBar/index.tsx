import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu';
import LanguageSelect from '../LanguageSelect';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ page }) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('navbar did mount');
    return () => console.log('navbar did unmount');
  }, []);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Recover Laboratory
        </Typography>
        <Menu page={page} />
        <LanguageSelect />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  page: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavBar;

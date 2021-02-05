import React from 'react';
import { shape, string } from 'prop-types';
import {
  AppBar,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import Menu from './Menu';
import LanguageSwitcher from './LanguageSwitcher/index';
import LogoPartialTop from '../common/logo/LogoPartialTop/index';
import ContentPanel from '../common/ContentPanel';
import LogoPartialBottom from '../common/logo/LogoPartialBottom/index';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingLeft: 0,
  },
  topLogoContainer: {
    // This should match <ContentPanel>'s side panel in size and alignment to line up the logo.
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  logo: {
    maxWidth: 250,
    margin: 0,
  },
  logoBottom: {
    maxWidth: 250,
    paddingTop: 1,
  },
});

const NavBar = ({ page }) => {
  const classes = useStyles();
  const BottomLogo = <LogoPartialBottom className={classes.logoBottom} />;

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.topLogoContainer}>
          <LogoPartialTop className={classes.logo} />
        </div>
        <div>
          <Menu language={page.language} />
          <LanguageSwitcher page={page} />
        </div>
      </Toolbar>
      <ContentPanel sidePanelContent={BottomLogo}>asd</ContentPanel>
    </AppBar>
  );
};

NavBar.propTypes = {
  page: shape({
    language: string.isRequired,
  }).isRequired,
};

export default NavBar;

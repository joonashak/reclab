import React from 'react';
import { shape, string } from 'prop-types';
import {
  AppBar,
  makeStyles,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import Menu from './Menu';
import LanguageSwitcher from './LanguageSwitcher/index';
import LogoPartialTop from '../common/logo/LogoPartialTop/index';
import ContentPanel from '../common/ContentPanel';
import LogoPartialBottom from '../common/logo/LogoPartialBottom/index';
import ContentPanelSharedLayout from '../common/ContentPanel/ContentPanelSharedLayout';
import LogoInverted from '../common/logo/LogoInverted/index';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingLeft: 0,
    paddingRight: 0,
  },
  logo: {
    maxWidth: 250,
    margin: 0,
    alignSelf: 'flex-end',
  },
  logoBottom: {
    maxWidth: 250,
    paddingTop: 1,
    paddingBottom: 20,
  },
  mobileLogo: {
    height: 50,
    marginLeft: 10,
  },
  contentPanel: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
}));

const NavBar = ({ page }) => {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const TopLogo = <LogoPartialTop className={classes.logo} />;
  const BottomLogo = <LogoPartialBottom className={classes.logoBottom} />;

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <ContentPanelSharedLayout
          sidePanelContent={TopLogo}
          contentPanelClassName={classes.contentPanel}
        >
          {mobile && <LogoInverted className={classes.mobileLogo} />}
          <div>
            <LanguageSwitcher page={page} />
            <Menu language={page.language} />
          </div>
        </ContentPanelSharedLayout>
        <div />
      </Toolbar>
      <ContentPanel sidePanelContent={BottomLogo} />
    </AppBar>
  );
};

NavBar.propTypes = {
  page: shape({
    language: string.isRequired,
  }).isRequired,
};

export default NavBar;

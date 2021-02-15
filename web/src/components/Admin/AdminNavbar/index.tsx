import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby-theme-material-ui';
import LogoutButton from './LogoutButton';
import useAdminNavbar from './useAdminNavbar';
import DeploymentButton from './DeploymentButton';
import adminRoutes from '../adminRoutes';

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

export default () => {
  const classes = useStyles();
  const { title } = useAdminNavbar();
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          onClick={toggle}
          edge="start"
          color="inherit"
          aria-label="Open Menu"
          data-cy="hamburger"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="top" open={isOpen} onClose={toggle}>
          <Container maxWidth="md">
            <List>
              <ListItem button component={Link} to={adminRoutes.root} onClick={toggle}>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>
              <ListItem button component={Link} to={adminRoutes.pages.fullPath} onClick={toggle}>
                <ListItemText>Pages</ListItemText>
              </ListItem>
              <ListItem button component={Link} to={adminRoutes.docs.fullPath} onClick={toggle}>
                <ListItemText>Documentation</ListItemText>
              </ListItem>
            </List>
          </Container>
        </Drawer>

        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <DeploymentButton />
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};

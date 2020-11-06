import React, { useState } from 'react';
import {
  AppBar,
  Button,
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
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="top" open={isOpen} onClose={toggle}>
          <Container maxWidth="md">
            <List>
              <ListItem button component={Link} to="/admin/pages">
                <ListItemText>Pages</ListItemText>
              </ListItem>
            </List>
          </Container>
        </Drawer>

        <Typography variant="h6" className={classes.title}>
          Admin
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};
import React, { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import {
  Container, Drawer, IconButton, List, makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { sortBy } from 'lodash';
import MenuItem from './MenuItem';
import MenuCategory from './MenuCategory';

const useStyles = makeStyles({
  drawer: {
    '& > .MuiDrawer-paper': {
      backgroundColor: '#000000ba',
    },
  },
});

const MenuWithData = ({ menuItems }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const isCategory = (menuItem) => !menuItem.path && !menuItem.page;

  return (
    <>
      <IconButton
        onClick={toggle}
        edge="start"
        color="inherit"
        aria-label="Open Menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={isOpen} onClose={toggle} className={classes.drawer}>
        <Container maxWidth="md">
          <List>
            {sortBy(menuItems, ['order'])
              .map((menuItem) => (isCategory(menuItem) ? (
                <MenuCategory key={menuItem.id} menuItem={menuItem} />
              ) : (
                <MenuItem key={menuItem.id} menuItem={menuItem} />
              )))}
          </List>
        </Container>
      </Drawer>
    </>
  );
};

MenuWithData.propTypes = {
  menuItems: arrayOf(
    shape({
      path: string,
      title: string.isRequired,
      language: string.isRequired,
      page: shape({
        path: string.isRequired,
      }),
    }),
  ).isRequired,
};

export default MenuWithData;

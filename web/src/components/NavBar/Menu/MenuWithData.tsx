import React, { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import {
  Container, Drawer, IconButton, List,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { sortBy } from 'lodash';
import MenuItem from './MenuItem';
import MenuCategory from './MenuCategory';

const MenuWithData = ({ menuItems }) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

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
      <Drawer anchor="top" open={isOpen} onClose={toggle}>
        <Container maxWidth="md">
          <List>
            {sortBy(menuItems, ['order'])
              .map((menuItem) => (menuItem.children.length ? (
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

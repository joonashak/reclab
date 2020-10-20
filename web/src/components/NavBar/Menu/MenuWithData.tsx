import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Drawer, IconButton, List,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from './MenuItem';

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
            {menuItems.map((menuItem) => (
              <MenuItem
                key={menuItem.id}
                menuItem={menuItem}
              />
            ))}
          </List>
        </Container>
      </Drawer>
    </>
  );
};

MenuWithData.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.oneOf([PropTypes.string, null]),
    title: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    page: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default MenuWithData;

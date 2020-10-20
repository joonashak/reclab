import React, { useState } from 'react';
import {
  Container, Drawer, IconButton, List,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from './MenuItem';
import { makePath } from '../../../util/snippets';

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
            {menuItems.map(({ id, title, page }) => (
              <MenuItem
                key={id}
                text={title}
                to={page ? makePath(page.language, page.path) : '/'}
              />
            ))}
          </List>
        </Container>
      </Drawer>
    </>
  );
};

export default MenuWithData;

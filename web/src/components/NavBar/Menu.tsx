import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import {
  Container, Drawer, IconButton, List,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from './MenuItem';
import { makePath } from '../../util/snippets';

const query = graphql`
  query {
    allMenu {
      nodes {
        order
        title
        id: alternative_id
        parent: alternative_parent {
          title
          order
          id: alternative_id
        }
        page {
          language
          path
        }
      }
    }
  }
`;

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <StaticQuery query={query}>
      {(data) => (
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
                {data.allMenu.nodes.map(({ id, title, page }) => (
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
      )}
    </StaticQuery>
  );
};

Menu.propTypes = {
  page: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default Menu;

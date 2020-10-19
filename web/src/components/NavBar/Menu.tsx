import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Drawer, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
      }
    }
  }
`;

/**
      <div>
        {data.allMenu.nodes.map((menuItem) => (
          <span key={menuItem.id}>{menuItem.title}</span>
        ))}
      </div>
 */

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
              menu
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

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

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

const Menu = () => (
  <StaticQuery query={query}>
    {(data) => (
      <div>
        {data.allMenu.nodes.map((menuItem) => (
          <span key={menuItem.id}>{menuItem.title}</span>
        ))}
      </div>
    )}
  </StaticQuery>
);

Menu.propTypes = {
  page: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default Menu;

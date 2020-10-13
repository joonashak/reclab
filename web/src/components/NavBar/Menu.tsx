import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

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

const Menu = ({ page }) => (
  <StaticQuery
    query={query}
  >
    {(data) => (
      <div>
        {/* eslint-disable-next-line */}
        <Link to={`/${page.translations[0].language}${page.translations[0].path}`}>test</Link>
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

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import MenuWithData from './MenuWithData';

const query = graphql`
  query {
    allMenu {
      nodes {
        order
        title
        language
        path
        id: alternative_id
        parent: alternative_parent {
          id: alternative_id
        }
        page {
          path
        }
      }
    }
  }
`;

const Menu = ({ page }) => (
  <StaticQuery query={query}>
    {(data) => {
      const menuItems = data.allMenu.nodes.filter(
        (menuItem) => menuItem.language === page.language,
      );

      return <MenuWithData menuItems={menuItems} />;
    }}
  </StaticQuery>
);

Menu.propTypes = {
  page: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default Menu;

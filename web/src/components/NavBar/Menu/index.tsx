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
      // Filter by active language.
      const menuItems = data.allMenu.nodes.filter(
        (menuItem) => menuItem.language === page.language,
      );

      // Convert the flat structure from CMS into a nested structure for rendering.
      const roots = menuItems.filter((item) => !item.parent);
      const nestedData = roots.map((root) => {
        const children = menuItems.filter((item) => item.parent && item.parent.id === root.id);
        return { ...root, children };
      });

      return <MenuWithData menuItems={nestedData} />;
    }}
  </StaticQuery>
);

Menu.propTypes = {
  page: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default Menu;

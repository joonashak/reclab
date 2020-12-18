import React from 'react';
import { string } from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import MenuWithData from './MenuWithData';

const query = graphql`
  query {
    allMenu(filter: { id: { ne: "dummy" } }) {
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

const Menu = ({ language }) => (
  <StaticQuery query={query}>
    {(data) => {
      // Filter by active language.
      const menuItems = data.allMenu.nodes.filter(
        (menuItem) => menuItem.language === language,
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
  language: string.isRequired,
};

export default Menu;

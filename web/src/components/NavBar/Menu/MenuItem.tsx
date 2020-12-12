import React from 'react';
import { shape, string } from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { makePath } from '../../../util/snippets';

const MenuItem = ({ menuItem }) => {
  const {
    path, page, title, language,
  } = menuItem;

  const to = path || makePath(language, page.path);

  return (
    <ListItem button component={Link} to={to}>
      <ListItemText>
        {title}
      </ListItemText>
    </ListItem>
  );
};

MenuItem.propTypes = {
  menuItem: shape({
    path: string,
    title: string.isRequired,
    language: string.isRequired,
    page: shape({
      path: string.isRequired,
    }),
  }).isRequired,
};

export default MenuItem;

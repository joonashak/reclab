import React from 'react';
import PropTypes from 'prop-types';
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
  menuItem: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    page: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MenuItem;

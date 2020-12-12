import React from 'react';
import { string, shape } from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { makePath } from '../../../../util/snippets';
import ADMIN_ROUTES from '../../routes';

const PageListItem = ({ page }) => {
  console.log('placeholder');

  return (
    <ListItem>
      <ListItemText
        primary={(
          <Link to={`${ADMIN_ROUTES.EDIT_PAGE}/${page.id}`}>
            {page.title}
          </Link>
                )}
        secondary={(
          <Link to={makePath(page.language, page.path)}>
            {makePath(page.language, page.path)}
          </Link>
              )}
      />
    </ListItem>
  );
};

PageListItem.propTypes = {
  page: shape({
    id: string.isRequired,
    title: string.isRequired,
    language: string.isRequired,
    path: string.isRequired,
  }).isRequired,
};

export default PageListItem;

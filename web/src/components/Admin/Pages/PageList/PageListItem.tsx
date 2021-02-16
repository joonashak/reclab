import React from 'react';
import { string, shape, bool } from 'prop-types';
import {
  ListItem, ListItemText, makeStyles, Theme, createStyles,
} from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { makePath } from '../../../../util/snippets';
import PrivacyAvatar from './PrivacyAvatar';
import adminRoutes from '../../adminRoutes';

const useStyles = makeStyles((theme: Theme) => createStyles({
  listItemText: {
    '& > *': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },

  primaryLink: {
    color: theme.palette.primary.dark,
  },

  secondaryLink: {
    color: theme.palette.grey[600],
  },
}));

const PageListItem = ({ page }) => {
  const classes = useStyles();

  return (
    <ListItem>
      <PrivacyAvatar isPublic={page.isPublic} />
      <ListItemText
        className={classes.listItemText}
        primary={(
          <Link to={`${adminRoutes.editPage.fullPath}/${page.id}`} className={classes.primaryLink}>
            {page.title}
          </Link>
                )}
        secondary={(
          <Link to={makePath(page.language, page.path)} className={classes.secondaryLink}>
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
    isPublic: bool.isRequired,
  }).isRequired,
};

export default PageListItem;

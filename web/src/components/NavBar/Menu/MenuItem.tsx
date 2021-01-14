import React from 'react';
import { shape, string } from 'prop-types';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { makePath } from '../../../util/snippets';

const useStyles = makeStyles({
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemText: {
    color: 'white',
    '& > span': {
      fontSize: '1.5rem',
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      textTransform: 'uppercase',
    },
  },
});

const MenuItem = ({ menuItem }) => {
  const classes = useStyles();
  const {
    path, page, title, language,
  } = menuItem;

  const to = path || makePath(language, page.path);

  return (
    <ListItem button component={Link} to={to} className={classes.listItem}>
      <ListItemText className={classes.listItemText}>
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

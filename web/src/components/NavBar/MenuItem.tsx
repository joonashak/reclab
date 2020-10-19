import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const MenuItem = ({ text, to }) => (
  <ListItem button component={Link} to={to}>
    <ListItemText>
      {text}
    </ListItemText>
  </ListItem>
);

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;

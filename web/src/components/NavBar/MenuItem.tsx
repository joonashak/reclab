import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

export default ({ text, to }) => (
  <ListItem button>
    <ListItemText>
      {text}
    </ListItemText>
  </ListItem>
);

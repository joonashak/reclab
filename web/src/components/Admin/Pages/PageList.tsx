import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import usePages from './usePages';
import { makePath } from '../../../util/snippets';

export default () => {
  const { pages } = usePages();

  return (
    <List>
      {pages.map((page) => (
        <ListItem>
          <ListItemText primary={page.title} secondary={makePath(page.language, page.path)} />
        </ListItem>
      ))}
    </List>
  );
};

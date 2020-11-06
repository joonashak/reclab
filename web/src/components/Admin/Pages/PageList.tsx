import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grid, List, ListItem, ListItemText,
} from '@material-ui/core';
import { navigate } from 'gatsby';
import usePages from './usePages';
import { makePath } from '../../../util/snippets';

const PageList = () => {
  const { pages } = usePages();

  return (
    <div>
      <Grid item xs={12}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigate('/admin/pages/new')}
        >
          New Page
        </Button>
      </Grid>
      <Grid item xs={12}>
        <List>
          {pages.map((page) => (
            <ListItem key={page.id}>
              <ListItemText
                primary={page.title}
                secondary={makePath(page.language, page.path)}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </div>
  );
};

PageList.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  default: PropTypes.bool,
};

PageList.defaultProps = {
  default: false,
};

export default PageList;

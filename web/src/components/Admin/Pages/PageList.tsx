import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grid, List, ListItem, ListItemText,
} from '@material-ui/core';
import { navigate } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';
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
                primary={(
                  <Link to={`/admin/pages/edit/${page.id}`}>
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

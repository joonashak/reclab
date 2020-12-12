import React from 'react';
import { string, bool } from 'prop-types';
import { Button, Grid, List } from '@material-ui/core';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import usePages from '../usePages';
import ADMIN_ROUTES from '../../routes';
import PageListItem from './PageListItem';

const PageList = () => {
  const { pages } = usePages();

  return (
    <div>
      <Helmet>
        <title>Pages</title>
      </Helmet>
      <Grid item xs={12}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigate(ADMIN_ROUTES.NEW_PAGE)}
        >
          New Page
        </Button>
      </Grid>
      <Grid item xs={12}>
        <List>
          {pages.map((page) => <PageListItem key={page.id} page={page} />)}
        </List>
      </Grid>
    </div>
  );
};

PageList.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  default: bool,
};

PageList.defaultProps = {
  default: false,
};

export default PageList;

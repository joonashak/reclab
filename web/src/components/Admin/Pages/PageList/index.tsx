import React from 'react';
import { string, bool } from 'prop-types';
import {
  Button, List, Container, Typography, makeStyles, Theme, createStyles,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import usePages from '../usePages';
import ADMIN_ROUTES from '../../routes';
import PageListItem from './PageListItem';
import { useAdminNavbarTitle } from '../../AdminNavbar/useAdminNavbar';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    paddingTop: theme.spacing(2),
  },
  newPageButton: {
    margin: theme.spacing(2),
  },
  h4: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const PageList = () => {
  const { pages } = usePages();
  const classes = useStyles();
  useAdminNavbarTitle('Pages');

  return (
    <Container className={classes.container}>
      <Helmet>
        <title>Pages</title>
      </Helmet>
      <Typography variant="h3" gutterBottom>Pages</Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => navigate(ADMIN_ROUTES.NEW_PAGE)}
        className={classes.newPageButton}
      >
        New Page
      </Button>
      <Typography variant="h4" className={classes.h4}>Current Pages</Typography>
      <Typography variant="body1" gutterBottom>Select a page to edit.</Typography>
      <List>
        {pages.map((page) => <PageListItem key={page.id} page={page} />)}
      </List>
    </Container>
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

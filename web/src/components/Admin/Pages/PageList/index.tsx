import React, { useState } from 'react';
import { string, bool } from 'prop-types';
import {
  List, Container, Typography, makeStyles, Theme, createStyles,
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import usePages from '../usePages';
import PageListItem from './PageListItem';
import { useAdminNavbarTitle } from '../../AdminNavbar/useAdminNavbar';
import NewPageButton from './NewPageButton';
import SortPages from './SortPages';
import FilterPages from './FilterPages';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    paddingTop: theme.spacing(2),
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

  const [sortFn, setSortFn] = useState();
  const sortedPages = pages.sort(sortFn);

  const [filterFn, setFilterFn] = useState(() => () => true);
  const filteredAndSortedPages = sortedPages.filter(filterFn);

  return (
    <Container className={classes.container}>
      <Helmet>
        <title>Pages</title>
      </Helmet>
      <Typography variant="h3" gutterBottom>Pages</Typography>
      <NewPageButton />
      <Typography variant="h4" className={classes.h4}>Current Pages</Typography>
      <Typography variant="body1" gutterBottom>Select a page to edit.</Typography>
      <SortPages setSortFn={setSortFn} />
      <FilterPages setFilterFn={setFilterFn} />
      <List data-cy="pages-list">
        {filteredAndSortedPages.map((page) => <PageListItem key={page.id} page={page} />)}
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

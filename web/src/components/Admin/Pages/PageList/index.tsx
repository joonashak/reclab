import React, { useState } from 'react';
import { string, bool } from 'prop-types';
import { List, Container, Typography } from '@material-ui/core';
import usePages from '../usePages';
import PageListItem from './PageListItem';
import { useAdminNavbarTitle } from '../../AdminNavbar/useAdminNavbar';
import NewPageButton from './NewPageButton';
import SortPages from './SortPages';
import FilterPages from './FilterPages';
import Heading from '../../common/typography/Heading';

const PageList = () => {
  const { pages } = usePages();
  useAdminNavbarTitle('Pages');

  const [sortFn, setSortFn] = useState();
  const sortedPages = pages.sort(sortFn);

  const [filterFn, setFilterFn] = useState(() => () => true);
  const filteredAndSortedPages = sortedPages.filter(filterFn);

  return (
    <Container>
      <NewPageButton />
      <Heading>Current Pages</Heading>
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

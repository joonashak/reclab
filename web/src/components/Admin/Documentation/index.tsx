import React from 'react';
import { string } from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import { useAdminNavbarTitle } from '../AdminNavbar/useAdminNavbar';
import ComponentList from './ComponentList';
import Heading from '../common/typography/Heading';

const Documentation = () => {
  useAdminNavbarTitle('Documentation');

  return (
    <Container>
      <Typography>
        Documentation currently covers only custom MDX components
        (and possibly not even all of them)!
      </Typography>
      <Heading>Components</Heading>
      <ComponentList />
    </Container>
  );
};

Documentation.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
};

export default Documentation;

import React from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import { arrayOf, shape, string } from 'prop-types';
import { sortBy } from 'lodash';
import PropTableRow from './PropTableRow';
import SubHeading from '../../common/typography/SubHeading';

const PropTable = ({ componentProps }) => {
  if (!componentProps.length) {
    return null;
  }

  const sortedProps = sortBy(componentProps, 'name');

  return (
    <>
      <SubHeading>Props</SubHeading>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Required</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedProps.map(({ id, ...prop }) => <PropTableRow prop={prop} key={id} />)}
        </TableBody>
      </Table>
    </>
  );
};

PropTable.propTypes = {
  componentProps: arrayOf(shape({
    name: string.isRequired,
  })).isRequired,
};

export default PropTable;

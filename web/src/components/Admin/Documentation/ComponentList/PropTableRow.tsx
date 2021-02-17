import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { string, bool, shape } from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Code from '../../common/typography/Code';

const PropTableRow = ({ prop }) => {
  const { name, required, description } = prop;
  const typeName = prop.type.name;
  const defaultValue = prop.defaultValue?.value || null;

  return (
    <TableRow>
      <TableCell>
        <Code>{name}</Code>
      </TableCell>
      <TableCell>{required && '*'}</TableCell>
      <TableCell>{typeName}</TableCell>
      <TableCell>
        <code>{defaultValue}</code>
      </TableCell>
      <TableCell>
        <MDXRenderer>
          {description.childMdx.body}
        </MDXRenderer>
      </TableCell>
    </TableRow>
  );
};

PropTableRow.propTypes = {
  prop: shape({
    name: string.isRequired,
    required: bool.isRequired,
  }).isRequired,
};

export default PropTableRow;

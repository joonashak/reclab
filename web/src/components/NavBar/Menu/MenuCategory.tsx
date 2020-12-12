import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import {
  Accordion, AccordionDetails, AccordionSummary, List,
} from '@material-ui/core';
import { sortBy } from 'lodash';
import MenuItem from './MenuItem';

const MenuCategory = ({ menuItem }) => {
  const { title, children } = menuItem;

  return (
    <Accordion>
      <AccordionSummary>
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {sortBy(children, ['order'])
            .map((child) => <MenuItem key={child.id} menuItem={child} />)}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

MenuCategory.propTypes = {
  menuItem: shape({
    title: string.isRequired,
    children: arrayOf(shape({})).isRequired,
  }).isRequired,
};

export default MenuCategory;

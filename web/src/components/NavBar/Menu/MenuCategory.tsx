import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, AccordionDetails, AccordionSummary, List,
} from '@material-ui/core';
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
          {children.map((child) => <MenuItem key={child.id} menuItem={child} />)}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

MenuCategory.propTypes = {
  menuItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default MenuCategory;

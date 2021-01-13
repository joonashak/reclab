import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import {
  Accordion, AccordionDetails, AccordionSummary, List, makeStyles,
} from '@material-ui/core';
import { sortBy } from 'lodash';
import MenuItem from './MenuItem';

const useStyles = makeStyles({
  accordion: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '1.5rem',
    boxShadow: 'none',
    '&.Mui-expanded': {
      margin: '0 auto',
    },
  },
  accordionSummary: {
    margin: '0 auto',
    '&.Mui-expanded': {
      margin: '0 auto',
      '& > div': {
        margin: '0 auto',
      },
    },
  },
  accordionDetails: {
    padding: '0 50px',
  },
});

const MenuCategory = ({ menuItem }) => {
  const classes = useStyles();
  const { title, children } = menuItem;

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary className={classes.accordionSummary}>
        {title}
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
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

import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { node } from 'prop-types';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    margin: theme.spacing(3, 0, 2, 0),
    fontWeight: 400,
  },
}));

const Heading = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant="h1" className={classes.heading}>
      {children}
    </Typography>
  );
};

Heading.propTypes = {
  children: node.isRequired,
};

export default Heading;

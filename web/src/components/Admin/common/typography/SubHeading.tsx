import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { node } from 'prop-types';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    margin: theme.spacing(2, 0, 1, 0),
    fontWeight: 400,
  },
}));

const SubHeading = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography variant="h2" className={classes.heading}>
      {children}
    </Typography>
  );
};

SubHeading.propTypes = {
  children: node.isRequired,
};

export default SubHeading;

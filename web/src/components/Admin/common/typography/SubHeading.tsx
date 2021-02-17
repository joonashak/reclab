import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { node, string } from 'prop-types';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    margin: theme.spacing(2, 0, 1, 0),
    fontWeight: 400,
  },
}));

const SubHeading = ({ children, className }) => {
  const classes = useStyles();
  const combinedClasses = [classes.heading, className].join(' ');

  return (
    <Typography variant="h2" className={combinedClasses}>
      {children}
    </Typography>
  );
};

SubHeading.propTypes = {
  children: node.isRequired,
  className: string,
};

SubHeading.defaultProps = {
  className: null,
};

export default SubHeading;

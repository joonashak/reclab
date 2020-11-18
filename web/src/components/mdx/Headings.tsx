import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// eslint-disable-next-line react/prop-types
const heading = (variant, centered = false, spacing = 3) => ({ children }) => {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      marginTop: theme.spacing(spacing),
      marginBottom: theme.spacing(spacing),
      textAlign: centered ? 'center' : 'left',
    },
  }));

  const classes = useStyles();

  return (<Typography variant={variant} className={classes.root}>{children}</Typography>);
};

export default {
  H1: heading('h1', true),
  H2: heading('h2', true),
  H3: heading('h3'),
  H4: heading('h4'),
  H5: heading('h5'),
  H6: heading('h6'),
};

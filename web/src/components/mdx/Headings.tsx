import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ContentPanel from '../common/ContentPanel';

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

  return (
    <ContentPanel>
      <Typography variant={variant} className={classes.root}>{children}</Typography>
    </ContentPanel>
  );
};

export default {
  H1: heading('h1', false),
  H2: heading('h2', false),
  H3: heading('h3', false, 2),
  H4: heading('h4', false, 2),
  H5: heading('h5', false, 1),
  H6: heading('h6', false, 1),
};

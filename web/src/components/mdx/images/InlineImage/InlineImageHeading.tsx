import React, { useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import InlineImageCredits from './InlineImageCredits';
import { InlineImageProps } from '.';

const useStyles = makeStyles((theme: Theme) => ({
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  heading: {
    height: '50%',
    display: 'flex',
    alignItems: 'flex-end',
  },
}));

/**
 * Standard image component for use amidst other content.
 */
const InlineImageHeading = () => {
  const { heading, editBy, photoBy } = useContext(InlineImageProps);
  const classes = useStyles();

  return (heading || editBy || photoBy) && (
  <div className={classes.headingContainer}>
    <InlineImageCredits />
    <Typography variant="h3" className={classes.heading}>{heading}</Typography>
  </div>
  );
};

export default InlineImageHeading;

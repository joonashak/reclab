import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { string } from 'prop-types';
import { Typography } from '@material-ui/core';
import InlineImageCredits from './InlineImageCredits';

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
const InlineImageHeading = ({ heading, photoBy, editBy }) => {
  const classes = useStyles();

  return heading && (
  <div className={classes.headingContainer}>
    <InlineImageCredits photoBy={photoBy} editBy={editBy} />
    <Typography variant="h3" className={classes.heading}>{heading}</Typography>
  </div>
  );
};

InlineImageHeading.propTypes = {
  heading: string,
  photoBy: string,
  editBy: string,
};

InlineImageHeading.defaultProps = {
  heading: null,
  photoBy: null,
  editBy: null,
};

export default InlineImageHeading;

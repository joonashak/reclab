import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { string } from 'prop-types';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  headingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: theme.spacing(1, 1, 0),
  },
}));

/**
 * Standard image component for use amidst other content.
 */
const InlineImageHeading = ({ heading }) => {
  const classes = useStyles();

  return heading && (
  <div className={classes.headingContainer}>
    <Typography variant="h3">{heading}</Typography>
  </div>
  );
};

InlineImageHeading.propTypes = {
  /**
   * Optional heading text.
   */
  heading: string,
};

InlineImageHeading.defaultProps = {
  heading: null,
};

export default InlineImageHeading;

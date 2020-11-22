import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  root: {
    width: '80%',
    margin: '2rem auto',
  },
}));

const BigBodyImage = ({ fluid, fixed }) => {
  const classes = useStyles();

  return <Img fluid={fluid} fixed={fixed} className={classes.root} />;
};

BigBodyImage.propTypes = {
  fixed: PropTypes.shape({}),
  fluid: PropTypes.shape({}),
};

BigBodyImage.defaultProps = {
  fixed: null,
  fluid: null,
};

export default BigBodyImage;

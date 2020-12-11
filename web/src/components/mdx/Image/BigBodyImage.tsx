import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { createStyles, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    margin: '2rem 0',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      marginLeft: -32,
    },
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

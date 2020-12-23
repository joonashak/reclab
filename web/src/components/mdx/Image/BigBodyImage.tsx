import React from 'react';
import { shape, string } from 'prop-types';
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

const BigBodyImage = ({ fluid, fixed, className }) => {
  const classes = useStyles();
  const allClasses = `${classes.root} ${className}`;

  return <Img fluid={fluid} fixed={fixed} className={allClasses} />;
};

BigBodyImage.propTypes = {
  fixed: shape({}),
  fluid: shape({}),
  className: string,
};

BigBodyImage.defaultProps = {
  fixed: null,
  fluid: null,
  className: '',
};

export default BigBodyImage;

import React from 'react';
import { shape, string } from 'prop-types';
import Img from 'gatsby-image';
import { createStyles, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '80%',
    margin: '2rem auto',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      marginLeft: -32,
    },
  },
}));

const BigBodyImage = ({ src, className }) => {
  const classes = useStyles();
  const allClasses = `${classes.root} ${className}`;

  return (
    <div>
      <Img fluid={src} className={allClasses} />
    </div>
  );
};

BigBodyImage.propTypes = {
  src: shape({}),
  className: string,
};

BigBodyImage.defaultProps = {
  src: null,
  className: '',
};

export default BigBodyImage;

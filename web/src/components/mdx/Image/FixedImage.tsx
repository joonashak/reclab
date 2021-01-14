import React from 'react';
import { number, shape, string } from 'prop-types';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

const FixedImage = ({ src, spacing, className }) => {
  const classes = makeStyles((theme: Theme) => ({
    img: {
      margin: theme.spacing(spacing),
    },
  }))();

  const allClasses = `${classes.img} ${className}`;

  return <Img fixed={src} className={allClasses} />;
};

FixedImage.propTypes = {
  src: shape({}),
  className: string,
  spacing: number,
};

FixedImage.defaultProps = {
  src: null,
  className: '',
  spacing: 2,
};

export default FixedImage;

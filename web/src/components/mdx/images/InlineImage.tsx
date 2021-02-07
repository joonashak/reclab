import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { string } from 'prop-types';
import { useMediaQuery } from '@material-ui/core';
import FluidImage from './FluidImage';
import FullscreenImage from './FullscreenImage';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '2rem 0',
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
    },
  },
  img: {
    width: '100%',
    borderTop: '4px solid black',
    borderBottom: '4px solid black',
    [theme.breakpoints.up('md')]: {
      width: 600,
      border: '4px solid black',
    },
  },
}));

const InlineImage = ({ src }) => {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const Image = <FluidImage src={src} className={classes.img} />;

  return (
    <div className={classes.root}>
      {mobile
        ? Image
        : <FullscreenImage trigger={Image} src={src} />}
    </div>
  );
};

InlineImage.propTypes = {
  src: string.isRequired,
};

export default InlineImage;

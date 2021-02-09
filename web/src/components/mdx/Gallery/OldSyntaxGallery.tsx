import React from 'react';
import { arrayOf, string } from 'prop-types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FullscreenImage from '../images/FullscreenImage';
import FluidImage from '../images/FluidImage';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '2rem 0',
    display: 'flex',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
  },
  fullscreenImage: {
    width: '100%',
    marginBottom: '2rem',
    [theme.breakpoints.up('sm')]: {
      width: 500,
      justifyContent: 'space-evenly',
    },
  },
}));

/**
 * This is here only to support old content. Should be deprecated once time is ripe.
 */
const OldSyntaxGallery = ({ images }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((src) => (
        <FullscreenImage
          src={src}
          trigger={<FluidImage src={src} className={classes.image} />}
          className={classes.fullscreenImage}
        />
      ))}
    </div>
  );
};

OldSyntaxGallery.propTypes = {
  images: arrayOf(string).isRequired,
};

export default OldSyntaxGallery;

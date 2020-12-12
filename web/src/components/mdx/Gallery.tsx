import React from 'react';
import { arrayOf, string } from 'prop-types';
import { GridList, GridListTile } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Image from './Image';

const useStyles = makeStyles(() => createStyles({
  gridList: {
    width: '700px',
    margin: '0 auto !important',
  },
  gridListTile: {
    width: '300px !important',
    height: '300px !important',
  },
}));

const Gallery = ({ images }) => {
  const classes = useStyles();

  return (
    <GridList cols={2} className={classes.gridList}>
      {images.map((src) => (
        <GridListTile key={`gallery-tile-${src}`} cols={1} className={classes.gridListTile}>
          <Image src={src} />
        </GridListTile>
      ))}
    </GridList>
  );
};

Gallery.propTypes = {
  images: arrayOf(string).isRequired,
};

export default Gallery;

import React from 'react';
import { arrayOf, string, node } from 'prop-types';
import { ImageList } from '@material-ui/core';
import OldSyntaxGallery from './OldSyntaxGallery';

const Gallery = ({ images, children }) => {
  if (images) {
    return <OldSyntaxGallery images={images} />;
  }

  return (
    <ImageList cols={3}>
      {children}
    </ImageList>
  );
};

Gallery.propTypes = {
  images: arrayOf(string),
  children: node,
};

Gallery.defaultProps = {
  images: null,
  children: null,
};

export default Gallery;

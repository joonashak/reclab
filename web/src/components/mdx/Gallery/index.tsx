import React from 'react';
import { arrayOf, string } from 'prop-types';
import OldSyntaxGallery from './OldSyntaxGallery';

const Gallery = ({ images }) => {
  if (images) {
    return <OldSyntaxGallery images={images} />;
  }

  return <div>uus gallery</div>;
};

Gallery.propTypes = {
  images: arrayOf(string),
};

Gallery.defaultProps = {
  images: null,
};

export default Gallery;

import React from 'react';
import { arrayOf, string, node } from 'prop-types';
import OldSyntaxGallery from './OldSyntaxGallery';

const Gallery = ({ images, children }) => {
  if (images) {
    return <OldSyntaxGallery images={images} />;
  }

  return (
    <div>
      {children}
    </div>
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

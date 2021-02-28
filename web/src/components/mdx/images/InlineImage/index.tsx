/* eslint-disable react/no-unused-prop-types */
import React, { createContext } from 'react';
import { oneOf, string } from 'prop-types';
import InlineImageContent from './InlineImageContent';

const defaultProps = {
  position: 'left',
  size: 'medium',
  heading: null,
  photoBy: null,
  editBy: null,
};

const defaultState = {
  ...defaultProps,
  src: null,
};

export const InlineImageProps = createContext(defaultState);

/**
 * Standard image component for use amidst other content.
 */
const InlineImage = (props) => (
  <InlineImageProps.Provider value={props}>
    <InlineImageContent />
  </InlineImageProps.Provider>
);

InlineImage.propTypes = {
  /**
   * Name of the image to be shown.
   */
  src: string.isRequired,
  /**
   * Image position (`left | center | right`).
   */
  position: oneOf(['left', 'center', 'right']),
  /**
   * Optional heading text.
   */
  heading: string,
  /**
   * Image size (`small | medium`).
   */
  size: oneOf(['small', 'medium']),
  /**
   * Photographer's name for displaying credits.
   */
  photoBy: string,
  /**
   * Editor's name for displaying credits.
   */
  editBy: string,
};

InlineImage.defaultProps = defaultProps;

export default InlineImage;

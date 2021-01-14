import React from 'react';
import { string, bool } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import BigBodyImage from './BigBodyImage';
import FixedImage from './FixedImage';

/**
 * Load the specified image with GraphQL and pass it on to another image component
 * that takes care of styling etc.
 */
const Image = ({ src, fixed, className }) => {
  const images = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fixed {
              originalName
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const image = images.allFile.nodes.find((img) => img.childImageSharp.fixed.originalName === src);

  if (!image) {
    return null;
  }

  return fixed
    ? <FixedImage src={image.childImageSharp.fixed} className={className} />
    : <BigBodyImage src={image.childImageSharp.fluid} className={className} />;
};

Image.propTypes = {
  src: string.isRequired,
  fixed: bool,
  className: string,
};

Image.defaultProps = {
  fixed: false,
  className: null,
};

export default Image;

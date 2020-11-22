import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BigBodyImage from './BigBodyImage';

/**
 * Load the specified image with GraphQL and pass it on to another image component
 * that takes care of styling etc.
 */
const Image = ({ src, fixed }) => {
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
    ? <Img fixed={image.childImageSharp.fixed} />
    : <BigBodyImage fluid={image.childImageSharp.fluid} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  fixed: PropTypes.bool,
};

Image.defaultProps = {
  fixed: false,
};

export default Image;

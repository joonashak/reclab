import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
    : <Img fluid={image.childImageSharp.fluid} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  fixed: PropTypes.string,
};

Image.defaultProps = {
  fixed: false,
};

export default Image;

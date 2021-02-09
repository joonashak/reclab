import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { string } from 'prop-types';

const query = graphql`
  query {
    allFile {
      nodes {
        childImageSharp {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const FluidImage = ({ src, className }) => {
  const allImages = useStaticQuery(query);
  const image = allImages.allFile.nodes.find(
    (img) => img.childImageSharp.fluid.originalName === src,
  );

  // TODO: Handle missing images visibly.
  if (!image) {
    return null;
  }

  return <Img fluid={image.childImageSharp.fluid} className={className} />;
};

FluidImage.propTypes = {
  src: string.isRequired,
  className: string,
};

FluidImage.defaultProps = {
  className: null,
};

export default FluidImage;

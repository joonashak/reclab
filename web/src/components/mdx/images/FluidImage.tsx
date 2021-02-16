import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { string } from 'prop-types';

const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
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
  const image = allImages.allImageSharp.edges.find(
    ({ node }) => node.fluid.originalName === src,
  );

  // TODO: Handle missing images visibly.
  if (!image) {
    return null;
  }

  return <Img fluid={image.node.fluid} className={className} />;
};

FluidImage.propTypes = {
  src: string.isRequired,
  className: string,
};

FluidImage.defaultProps = {
  className: null,
};

export default FluidImage;

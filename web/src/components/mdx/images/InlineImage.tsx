import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
  query {
    allFile {
      nodes {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            originalName
            ...GatsbyImageSharpFluid
          }
          fixed(height: 300) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

const InlineImage = ({ src }) => {
  const allImages = useStaticQuery(query);
  const image = allImages.allFile.nodes.find(
    (img) => img.childImageSharp.fluid.originalName === src,
  );

  // TODO: Handle missing images visibly.
  if (!image) {
    return null;
  }

  return <Img fixed={image.childImageSharp.fixed} />;
};

export default InlineImage;

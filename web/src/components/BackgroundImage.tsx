import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: {eq: "keltanentausta.png"}) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  // Set ImageData.
  const imageData = data.file.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor="#040e18"
    >
      <h2>gatsby-background-image</h2>
    </BackgroundImage>
  );
};

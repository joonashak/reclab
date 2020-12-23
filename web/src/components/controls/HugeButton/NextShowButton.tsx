import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import HugeButton from '.';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        imageSharp(fluid: {originalName: {eq: "satamillia.jpg"}}) {
          fluid(quality: 90, maxWidth: 400) {
            src
            srcSet
          }
        }
      }
    `,
  );

  try {
    const imageData = data.imageSharp.fluid;
    const { src } = imageData;

    return <HugeButton src={src} />;
  } catch (error) {
    return <HugeButton src="" />;
  }
};

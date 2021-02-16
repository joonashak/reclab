import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ComponentInfo from './ComponentInfo';

const query = graphql`
  query {
    allComponentMetadata {
      nodes {
        displayName
        id
        description {
          text
        }
        props {
          description {
            text
          }
          id
          name
          required
          type {
            name
            raw
            value
          }
        }
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(query);
  console.log(data);
  const components = data.allComponentMetadata.nodes;

  return (
    <>
      {components.map((component) => <ComponentInfo component={component} />)}
    </>
  );
};

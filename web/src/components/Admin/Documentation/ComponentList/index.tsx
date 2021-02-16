import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ComponentInfo from './ComponentInfo';
import componentNames from '../componentNames';

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
  const namesToInclude = componentNames.map((name) => name.componentName);
  const components = data.allComponentMetadata.nodes
    .filter((component) => namesToInclude.includes(component.displayName));

  return (
    <>
      {components.map((component) => <ComponentInfo component={component} />)}
    </>
  );
};

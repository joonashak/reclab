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
          childMdx {
            body
          }
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
  const namesToInclude = componentNames.map((name) => name.componentName);
  const components = data.allComponentMetadata.nodes
    .filter((component) => namesToInclude.includes(component.displayName));

  const findOptionalPrettyName = (componentName) => {
    const names = componentNames.find((name) => name.componentName === componentName);
    return names.prettyName || null;
  };

  return (
    <>
      {components.map((component) => (
        <ComponentInfo
          component={component}
          prettyName={findOptionalPrettyName(component.displayName)}
        />
      ))}
    </>
  );
};

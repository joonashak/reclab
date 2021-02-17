import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { sortBy } from 'lodash';
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
        }
        props {
          description {
            childMdx {
              body
            }
          }
          id
          name
          required
          type {
            name
          }
          defaultValue {
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
  const filteredComponents = data.allComponentMetadata.nodes
    .filter((component) => namesToInclude.includes(component.displayName));

  // Replace names for those components that have another name mapped in UI.
  const components = filteredComponents.map(({ displayName, ...rest }) => {
    const names = componentNames.find((name) => name.componentName === displayName);
    return { ...rest, displayName: names.prettyName || displayName };
  });

  const sortedComponents = sortBy(components, 'displayName');

  return (
    <>
      {sortedComponents.map((component) => (
        <ComponentInfo
          component={component}
          key={component.id}
        />
      ))}
    </>
  );
};

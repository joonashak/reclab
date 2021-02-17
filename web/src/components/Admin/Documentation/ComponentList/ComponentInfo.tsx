import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { shape, string, node } from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import Code from '../../common/typography/Code';
import SubHeading from '../../common/typography/SubHeading';
import documentationMdxShortcodes from '../documentationMdxShortcodes';

const ComponentInfo = ({ component, prettyName }) => {
  console.log(component);
  const { displayName } = component;
  const name = prettyName || displayName;

  return (
    <>
      <SubHeading>
        <Code>{name}</Code>
      </SubHeading>
      <MDXProvider components={documentationMdxShortcodes}>
        <MDXRenderer>
          {component.description.childMdx.body}
        </MDXRenderer>
      </MDXProvider>
    </>
  );
};

ComponentInfo.propTypes = {
  component: shape({
    displayName: string,
    description: shape({
      childMdx: shape({
        body: node,
      }),
    }),
  }).isRequired,
  prettyName: string,
};

ComponentInfo.defaultProps = {
  prettyName: null,
};

export default ComponentInfo;

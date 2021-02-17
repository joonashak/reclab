import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { shape, string, node } from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Code from '../../common/typography/Code';
import SubHeading from '../../common/typography/SubHeading';
import documentationMdxShortcodes from '../documentationMdxShortcodes';

const usetStyles = makeStyles((theme: Theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
  title: {
    marginTop: 0,
  },
}));

const ComponentInfo = ({ component, prettyName }) => {
  console.log(component);
  const classes = usetStyles();
  const { displayName } = component;
  const name = prettyName || displayName;

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <SubHeading className={classes.title}>
          <Code>{name}</Code>
        </SubHeading>
        <MDXProvider components={documentationMdxShortcodes}>
          <MDXRenderer>
            {component.description.childMdx.body}
          </MDXRenderer>
        </MDXProvider>
      </CardContent>
    </Card>
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

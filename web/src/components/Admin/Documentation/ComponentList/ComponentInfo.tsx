import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { shape, string, node } from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Code from '../../common/typography/Code';
import SubHeading from '../../common/typography/SubHeading';
import documentationMdxShortcodes from '../documentationMdxShortcodes';
import PropTable from './PropTable';

const usetStyles = makeStyles((theme: Theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
  title: {
    marginTop: 0,
  },
}));

const ComponentInfo = ({ component }) => {
  const classes = usetStyles();
  const { displayName, props } = component;

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <SubHeading className={classes.title}>
          <Code>{displayName}</Code>
        </SubHeading>
        <MDXProvider components={documentationMdxShortcodes}>
          <MDXRenderer>
            {component.description.childMdx.body}
          </MDXRenderer>
        </MDXProvider>
        <PropTable componentProps={props} />
      </CardContent>
    </Card>
  );
};

ComponentInfo.propTypes = {
  component: shape({
    displayName: string.isRequired,
    description: shape({
      childMdx: shape({
        body: node.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ComponentInfo;

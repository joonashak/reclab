import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { string } from 'prop-types';

const query = graphql`
  query {
    allFile {
      nodes {
        childImageSharp {
          fixed(height: 400) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '2rem',
  },
  img: {
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      marginLeft: -32,
    },
  },
}));

const InlineImage = ({ src }) => {
  const classes = useStyles();

  const allImages = useStaticQuery(query);
  const image = allImages.allFile.nodes.find(
    (img) => img.childImageSharp.fixed.originalName === src,
  );

  // TODO: Handle missing images visibly.
  if (!image) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Img fixed={image.childImageSharp.fixed} />
    </div>
  );
};

InlineImage.propTypes = {
  src: string.isRequired,
};

export default InlineImage;

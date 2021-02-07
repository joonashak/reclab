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
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '2rem 0',
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
    },
  },
  img: {
    width: '100%',
    borderTop: '4px solid black',
    borderBottom: '4px solid black',
    [theme.breakpoints.up('md')]: {
      width: 600,
      border: '4px solid black',
    },
  },
}));

const InlineImage = ({ src }) => {
  const classes = useStyles();

  const allImages = useStaticQuery(query);
  const image = allImages.allFile.nodes.find(
    (img) => img.childImageSharp.fluid.originalName === src,
  );

  // TODO: Handle missing images visibly.
  if (!image) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Img fluid={image.childImageSharp.fluid} className={classes.img} />
    </div>
  );
};

InlineImage.propTypes = {
  src: string.isRequired,
};

export default InlineImage;

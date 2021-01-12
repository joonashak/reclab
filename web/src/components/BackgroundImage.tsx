import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { node } from 'prop-types';
import { makeStyles, Theme } from '@material-ui/core/styles';

type Props = { src: string }

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundImage: (props: Props) => `url("${props.src}")`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    paddingBottom: theme.spacing(5),
  },
}));

const BackgroundImage = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: {eq: "keltanentausta.png"}) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  // Set ImageData.
  const imageData = data.file.childImageSharp.fluid;
  const { src } = imageData;
  const classes = useStyles({ src });

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

BackgroundImage.propTypes = {
  children: node.isRequired,
};

export default BackgroundImage;

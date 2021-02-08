import React, { useState } from 'react';
import { ButtonBase, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { node, string } from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import FluidImage from './FluidImage';

type StyleProps = {
  aspectRatio: number
}

const useStyles = makeStyles({
  container: {
    margin: '2rem auto',
    width: 'fit-content',
  },
  image: {
    width: ({ aspectRatio }: StyleProps) => `calc(${aspectRatio} * (100vh - 4rem))`,
    maxWidth: 'calc(100vw - 4rem)',
  },
});

const query = graphql`
  query {
    allFile {
      nodes {
        childImageSharp {
          fluid {
            originalName
            aspectRatio
          }
        }
      }
    }
  }
`;

const FullscreenImage = ({ trigger, src }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  const allImages = useStaticQuery(query);
  const image = allImages.allFile.nodes.find(
    (img) => img.childImageSharp.fluid.originalName === src,
  );

  const { aspectRatio } = image.childImageSharp.fluid;
  const classes = useStyles({ aspectRatio });

  if (!image) {
    return trigger;
  }

  return (
    <>
      <ButtonBase onClick={toggle}>
        {trigger}
      </ButtonBase>
      <Modal open={open} onClose={toggle}>
        <div className={classes.container}>
          <FluidImage src={src} className={classes.image} />
        </div>
      </Modal>
    </>
  );
};

FullscreenImage.propTypes = {
  /**
   * Component that will be rendered to open the `src` image in fullscreen.
   */
  trigger: node.isRequired,
  /**
   * Name of the image to be shown in fullscreen.
   */
  src: string.isRequired,
};

export default FullscreenImage;

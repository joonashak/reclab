import React, { useState } from 'react';
import { ButtonBase, Fab, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { node, string } from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import CloseIcon from '@material-ui/icons/Close';
import FluidImage from './FluidImage';

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

type StyleProps = {
  aspectRatio: number
}

const useStyles = makeStyles({
  button: {
    width: 'fit-content',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    margin: '2rem auto',
    width: 'fit-content',
    '&:focus': {
      outline: 'none',
    },
  },
  image: {
    width: ({ aspectRatio }: StyleProps) => `calc(${aspectRatio} * (100vh - 4rem))`,
    maxWidth: 'calc(100vw - 4rem)',
  },
  fab: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
  },
});

const FullscreenImage = ({ trigger, src, className }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  const allImages = useStaticQuery(query);
  const image = allImages.allFile.nodes.find(
    (img) => img.childImageSharp.fluid.originalName === src,
  );

  if (!image) {
    return trigger;
  }

  const { aspectRatio } = image.childImageSharp.fluid;
  const classes = useStyles({ aspectRatio });
  const buttonClasses = [classes.button, className].join(' ');

  return (
    <>
      <ButtonBase onClick={toggle} className={buttonClasses}>
        {trigger}
      </ButtonBase>
      <Modal open={open} onClose={toggle} className={classes.modal}>
        <div className={classes.container}>
          <FluidImage src={src} className={classes.image} />
          <Fab
            color="primary"
            aria-label="Close"
            onClick={toggle}
            className={classes.fab}
          >
            <CloseIcon />
          </Fab>
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
  className: string,
};

FullscreenImage.defaultProps = {
  className: null,
};

export default FullscreenImage;

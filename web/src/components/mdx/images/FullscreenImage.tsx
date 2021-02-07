import React, { useState } from 'react';
import { ButtonBase, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { node, string } from 'prop-types';
import FluidImage from './FluidImage';

const useStyles = makeStyles({
  container: {
    margin: '2rem',
  },
});

const FullscreenImage = ({ trigger, src }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      <ButtonBase onClick={toggle}>
        {trigger}
      </ButtonBase>
      <Modal open={open} onClose={toggle}>
        <div className={classes.container}>
          <FluidImage src={src} />
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

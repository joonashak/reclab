import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { oneOf, string } from 'prop-types';
import { useMediaQuery } from '@material-ui/core';
import FluidImage from './FluidImage';
import FullscreenImage from './FullscreenImage';

type StyleProps = {
  position: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '2rem 0',
    display: 'flex',
    flexDirection: ({ position }: StyleProps) => (position === 'right' ? 'row-reverse' : 'row'),
    justifyContent: ({ position }:StyleProps) => (position === 'center' ? 'center' : 'flex-start'),
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

/**
 * Standard image component for use amidst other content.
 */
const InlineImage = ({ src, position }) => {
  const classes = useStyles({ position });
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const Image = <FluidImage src={src} className={classes.img} />;

  return (
    <div className={classes.root}>
      {mobile
        ? Image
        : <FullscreenImage trigger={Image} src={src} />}
    </div>
  );
};

InlineImage.propTypes = {
  /**
   * Name of the image to be shown.
   */
  src: string.isRequired,
  /**
   * Image position (`left | center | right`).
   */
  position: oneOf(['left', 'center', 'right']),
};

InlineImage.defaultProps = {
  position: 'left',
};

export default InlineImage;

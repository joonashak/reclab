import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { oneOf, string } from 'prop-types';
import { useMediaQuery } from '@material-ui/core';
import FluidImage from '../FluidImage';
import FullscreenImage from '../FullscreenImage';
import ContentPanel from '../../../common/ContentPanel';
import InlineImageHeading from './InlineImageHeading';

type StyleProps = {
  position: string,
  size: string
}

const flexDirection = {
  left: 'row',
  center: 'column',
  right: 'row-reverse',
};

const imageSize = {
  small: { mobile: '50%', desktop: 250 },
  medium: { mobile: '100%', desktop: 600 },
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '2rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: ({ position }: StyleProps) => flexDirection[position],
      justifyContent: ({ position }: StyleProps) => (position === 'center' ? 'center' : 'flex-start'),
      padding: '2rem',
    },
  },
  img: {
    width: ({ size }: StyleProps) => imageSize[size].mobile,
    [theme.breakpoints.up('md')]: {
      width: ({ size }: StyleProps) => imageSize[size].desktop,
    },
  },
  headingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: theme.spacing(1, 1, 0),
  },
  spacingPanelUpper: {
    height: theme.spacing(3),
  },
  spacingPanelLower: {
    height: theme.spacing(5),
  },
}));

/**
 * Standard image component for use amidst other content.
 */
const InlineImage = ({
  src, position, heading, size,
}) => {
  const classes = useStyles({ position, size });
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const Image = <FluidImage src={src} className={classes.img} />;

  return (
    <>
      <ContentPanel className={classes.spacingPanelUpper} />
      <div className={classes.root}>
        {mobile
          ? Image
          : <FullscreenImage trigger={Image} src={src} />}
        <InlineImageHeading heading={heading} />
      </div>
      <ContentPanel className={classes.spacingPanelLower} />
    </>
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
  /**
   * Optional heading text.
   */
  heading: string,
  /**
   * Image size (`small | medium`).
   */
  size: string,
};

InlineImage.defaultProps = {
  position: 'left',
  heading: null,
  size: 'medium',
};

export default InlineImage;

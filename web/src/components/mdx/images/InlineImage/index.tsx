import React, { createContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { oneOf, string } from 'prop-types';
import { useMediaQuery } from '@material-ui/core';
import FluidImage from '../FluidImage';
import FullscreenImage from '../FullscreenImage';
import ContentPanel from '../../../common/ContentPanel';
import InlineImageHeading from './InlineImageHeading';

const defaultState = {
  position: 'left',
  size: 'medium',
};

export const InlineImageContext = createContext(defaultState);

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
    [theme.breakpoints.up('md')]: {
      flexDirection: ({ position }: StyleProps) => flexDirection[position],
      justifyContent: ({ position }: StyleProps) => (position === 'center' ? 'center' : 'flex-start'),
      alignItems: ({ position }: StyleProps) => (position === 'center' ? 'center' : 'stretch'),
      padding: '2rem',
    },
  },
  img: {
    width: ({ size }: StyleProps) => imageSize[size].mobile,
    [theme.breakpoints.up('md')]: {
      width: ({ size }: StyleProps) => imageSize[size].desktop,
    },
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
  src, position, heading, size, photoBy, editBy,
}) => {
  const classes = useStyles({ position, size });
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const Image = <FluidImage src={src} className={classes.img} />;

  return (
    <InlineImageContext.Provider value={{ position, size }}>
      <ContentPanel className={classes.spacingPanelUpper} />
      <div className={classes.root}>
        {mobile
          ? Image
          : <FullscreenImage trigger={Image} src={src} />}
        <InlineImageHeading heading={heading} photoBy={photoBy} editBy={editBy} />
      </div>
      <ContentPanel className={classes.spacingPanelLower} />
    </InlineImageContext.Provider>
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
  size: oneOf(['small', 'medium']),
  /**
   * Photographer's name for displaying credits.
   */
  photoBy: string,
  /**
   * Editor's name for displaying credits.
   */
  editBy: string,
};

InlineImage.defaultProps = {
  position: defaultState.position,
  heading: null,
  size: defaultState.size,
  photoBy: null,
  editBy: null,
};

export default InlineImage;

import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { oneOf, string } from 'prop-types';
import { Typography, useMediaQuery } from '@material-ui/core';
import FluidImage from './FluidImage';
import FullscreenImage from './FullscreenImage';
import ContentPanel from '../../common/ContentPanel';

type StyleProps = {
  position: string
}

const flexDirection = {
  left: 'row',
  center: 'column-reverse',
  right: 'row-reverse',
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '2rem 0',
    display: 'flex',
    flexDirection: ({ position }: StyleProps) => flexDirection[position],
    justifyContent: ({ position }:StyleProps) => (position === 'center' ? 'center' : 'flex-start'),
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
    },
  },
  img: {
    width: '100%',
    borderTop: '2px solid black',
    borderBottom: '4px solid black',
    [theme.breakpoints.up('md')]: {
      width: 600,
      border: '2px solid black',
    },
  },
  headingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
const InlineImage = ({ src, position, heading }) => {
  const classes = useStyles({ position });
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const Image = <FluidImage src={src} className={classes.img} />;

  return (
    <>
      <ContentPanel className={classes.spacingPanelUpper} />
      <div className={classes.root}>
        {mobile
          ? Image
          : <FullscreenImage trigger={Image} src={src} />}
        {heading && (
        <div className={classes.headingContainer}>
          <Typography variant="h3">{heading}</Typography>
        </div>
        )}
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
};

InlineImage.defaultProps = {
  position: 'left',
  heading: null,
};

export default InlineImage;

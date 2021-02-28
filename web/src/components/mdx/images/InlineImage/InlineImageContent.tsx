import React, { useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import FluidImage from '../FluidImage';
import FullscreenImage from '../FullscreenImage';
import ContentPanel from '../../../common/ContentPanel';
import InlineImageHeading from './InlineImageHeading';
import { InlineImageProps } from './index';
import InlineImageCaption from './InlineImageCaption';

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
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default () => {
  const { src, position, size } = useContext(InlineImageProps);
  const classes = useStyles({ position, size });
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const Image = (
    <div className={classes.imageContainer}>
      <FluidImage src={src} className={classes.img} />
      <InlineImageCaption />
    </div>
  );

  return (
    <>
      <ContentPanel className={classes.spacingPanelUpper} />
      <div className={classes.root}>
        {mobile
          ? Image
          : <FullscreenImage trigger={Image} src={src} />}
        <InlineImageHeading />
      </div>
      <ContentPanel className={classes.spacingPanelLower} />
    </>
  );
};

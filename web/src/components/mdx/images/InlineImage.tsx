import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { string } from 'prop-types';
import FluidImage from './FluidImage';

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

  return (
    <div className={classes.root}>
      <FluidImage src={src} className={classes.img} />
    </div>
  );
};

InlineImage.propTypes = {
  src: string.isRequired,
};

export default InlineImage;

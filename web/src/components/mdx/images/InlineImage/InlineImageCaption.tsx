import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { InlineImageProps } from '.';

const useStyles = makeStyles((theme: Theme) => ({
  caption: {
    fontSize: '1.3em',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: theme.spacing(1, 1, 0, 1),
  },
}));

export default () => {
  const { heading, caption } = useContext(InlineImageProps);
  const classes = useStyles();

  if (heading || !caption) {
    return null;
  }

  return (
    <Typography className={classes.caption}>
      {caption}
    </Typography>
  );
};

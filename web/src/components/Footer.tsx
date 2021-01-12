import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: 'black',
    color: 'white',
    minHeight: 200,
    width: '100vw',
    maxWidth: 'unset',
  },
});

export default () => {
  const classes = useStyles();

  return <Container className={classes.container}>This ist ein footer.</Container>;
};

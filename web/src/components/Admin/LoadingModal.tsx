import React from 'react';
import { CircularProgress, Modal, Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:focus': {
      outline: 'none',
    },
  },
  paper: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.7rem',
    fontStyle: 'italic',
    padding: '2rem 4rem',
  },
  spinner: {
    marginRight: '2rem',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Modal open>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <CircularProgress className={classes.spinner} />
          Loading data, please wait...
        </Paper>
      </div>
    </Modal>
  );
};

import React from 'react';
import { func, shape } from 'prop-types';
import {
  Typography, makeStyles, Modal, Paper,
} from '@material-ui/core';
import { Theme, createStyles } from '@material-ui/core/styles';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { Helmet } from 'react-helmet';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme: Theme) => createStyles({
  modal: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    maxWidth: 600,
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(5),

    '& > *, & > form > *': {
      marginBottom: theme.spacing(1),
    },

    '&:focus': {
      outline: 'none',
    },

    [theme.breakpoints.down('xs')]: {
      height: '100vh',
      padding: theme.spacing(1),
    },
  },

  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.dark,
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },

  icon: {
    marginRight: theme.spacing(1),
    marginLeft: '-1rem',
    color: theme.palette.secondary.main,
    fontSize: '3rem',
    filter: 'drop-shadow(2px 2px 1px rgba(0, 0, 0, .3))',

    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
      filter: 'drop-shadow(3px 2px 1px rgba(0, 0, 0, .3))',
    },
  },
}));

const LoginView = ({ formControl, onSubmit }) => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Modal open className={classes.modal}>
        <Paper className={classes.container}>
          <Typography variant="h3" className={classes.heading}>
            <NotInterestedIcon className={classes.icon} />
            Admin Only!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Enter your credentials to log in.
          </Typography>
          <LoginForm formControl={formControl} onSubmit={onSubmit} />
        </Paper>
      </Modal>
    </>
  );
};

LoginView.propTypes = {
  formControl: shape({
    handleSubmit: func.isRequired,
    register: func.isRequired,
  }).isRequired,
  onSubmit: func.isRequired,
};

export default LoginView;

import React from 'react';
import { func, shape } from 'prop-types';
import {
  Typography, makeStyles, Container,
} from '@material-ui/core';
import { Theme, createStyles } from '@material-ui/core/styles';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(5),

    '& > *': {
      marginBottom: theme.spacing(1),
    },
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.dark,
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
    marginLeft: '-1rem',
    color: theme.palette.secondary.main,
    fontSize: '3rem',
  },
}));

const LoginView = ({ formControl, onSubmit }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h3" className={classes.heading}>
        <NotInterestedIcon className={classes.icon} />
        Admin Only!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enter your credentials to log in.
      </Typography>
      <LoginForm formControl={formControl} onSubmit={onSubmit} />
    </Container>
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

import React from 'react';
import {
  Button, Grid, Typography, FormControlLabel, Checkbox,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { func, shape } from 'prop-types';
import ControlledTextField from '../../controls/ControlledTextField';

const LoginForm = ({ formControl, onSubmit }) => {
  const { handleSubmit, register } = formControl;

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          Enter your credentials to log in.
        </Typography>
        <Typography variant="body2" style={{ fontStyle: 'italic' }}>
          (This app does not allow public registrations.)
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <ControlledTextField
          formControl={formControl}
          name="username"
          label="Username"
          autoComplete="username"
          rules={{ required: 'Username cannot be empty' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ControlledTextField
          formControl={formControl}
          name="password"
          label="Password"
          autoComplete="current-password"
          type="password"
          rules={{ required: 'Password cannot be empty' }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox name="remember" inputRef={register} />}
          label="Stay logged in for 30 days."
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
          startIcon={<LockOpenIcon />}
          fullWidth
        >
          Log In
        </Button>
      </Grid>
    </>
  );
};

LoginForm.propTypes = {
  formControl: shape({
    handleSubmit: func.isRequired,
    register: func.isRequired,
  }).isRequired,
  onSubmit: func.isRequired,
};

export default LoginForm;

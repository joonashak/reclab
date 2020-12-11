import React from 'react';
import {
  Button, FormControlLabel, Checkbox,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { func, shape } from 'prop-types';
import ControlledTextField from '../../controls/ControlledTextField';

const LoginForm = ({ formControl, onSubmit }) => {
  const { handleSubmit, register } = formControl;

  return (
    <>
      <ControlledTextField
        formControl={formControl}
        name="username"
        label="Username"
        autoComplete="username"
        rules={{ required: 'Username cannot be empty' }}
      />
      <ControlledTextField
        formControl={formControl}
        name="password"
        label="Password"
        autoComplete="current-password"
        type="password"
        rules={{ required: 'Password cannot be empty' }}
      />
      <FormControlLabel
        control={<Checkbox name="remember" inputRef={register} />}
        label="Stay logged in for 30 days."
      />
      <Button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        startIcon={<LockOpenIcon />}
        fullWidth
        data-cy="submit-login"
      >
        Log In
      </Button>
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

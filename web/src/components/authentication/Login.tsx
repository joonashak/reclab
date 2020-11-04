import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button, Grid, Typography, FormControlLabel, Checkbox,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { login } from '../../services/loginService';
import useAuthentication from './useAuthentication';
import ControlledTextField from '../controls/ControlledTextField';

export default () => {
  const formControl = useForm({ mode: 'onBlur' });
  const { handleSubmit, errors, register } = formControl;
  const { setToken } = useAuthentication();

  const submit = async (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }
    const { username, password } = data;
    const res = await login(username, password);

    if (res.error) {
      console.log(`Login failed: ${res.error.response.data.message}`, 'error');

      return;
    }

    const { data: { accessToken } } = res;
    setToken(accessToken);
    console.log('You were logged in!');
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          Enter your credentials to log in. CMS URL:
          {process.env.GATSBY_CMS_URL}
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
          onClick={handleSubmit(submit)}
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

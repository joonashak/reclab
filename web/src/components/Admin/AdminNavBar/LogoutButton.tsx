import React from 'react';
import { Button } from '@material-ui/core';
import useAuthentication from '../../authentication/useAuthentication';

export default () => {
  const { logout } = useAuthentication();

  const onClick = () => {
    logout();
    window.location.reload();
  };

  return <Button color="inherit" onClick={onClick}>Logout</Button>;
};

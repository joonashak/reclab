import React from 'react';
import { Button } from '@material-ui/core';
import useAuthentication from '../../authentication/useAuthentication';

export default () => {
  const { logout } = useAuthentication();

  const onClick = async () => {
    await logout();
    window.location.reload();
  };

  return <Button color="inherit" onClick={onClick} data-cy="logout">Logout</Button>;
};

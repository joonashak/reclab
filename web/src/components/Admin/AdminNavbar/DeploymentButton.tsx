import React from 'react';
import { Button } from '@material-ui/core';
import deploymentService from '../../../services/deploymentService';
import useAuthentication from '../../authentication/useAuthentication';
import useNotification from '../../GlobalNotification/useNotification';

export default () => {
  const { setNotification } = useNotification();
  const { token } = useAuthentication();

  const onClick = async () => {
    try {
      await deploymentService.deploy(token);
    } catch {
      setNotification('Deployment failed.', 'error');
    }

    setNotification('Page deployment started!', 'success', true);
  };

  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="secondary"
    >
      Deploy Changes
    </Button>
  );
};

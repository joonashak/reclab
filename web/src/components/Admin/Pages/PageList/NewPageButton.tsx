import React from 'react';
import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { navigate } from 'gatsby';
import ADMIN_ROUTES from '../../routes';

export default () => (
  <Button
    color="primary"
    variant="contained"
    size="large"
    startIcon={<AddCircleOutlineIcon />}
    onClick={() => navigate(ADMIN_ROUTES.NEW_PAGE)}
  >
    New Page
  </Button>
);

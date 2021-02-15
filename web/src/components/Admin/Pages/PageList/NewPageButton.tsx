import React from 'react';
import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { navigate } from 'gatsby';
import adminRoutes from '../../adminRoutes';

export default () => (
  <Button
    color="primary"
    variant="contained"
    size="large"
    startIcon={<AddCircleOutlineIcon />}
    onClick={() => navigate(adminRoutes.newPage.fullPath)}
    data-cy="new-page-button"
  >
    New Page
  </Button>
);

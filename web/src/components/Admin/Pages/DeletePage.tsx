import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import ControlledTextField from '../../controls/ControlledTextField';

const DeletePage = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const formControl = useForm({ mode: 'onBlur' });
  const path = formControl.watch('path');

  return (
    <>
      <Button onClick={toggle}>
        Delete Page
      </Button>
      <Dialog open={isOpen} onClose={toggle} aria-labelledby="delete-page-dialog-title">
        <DialogTitle id="delete-page-dialog-title">Confirm Deleting Page</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Page to delete:
            {' '}
            <i>{page.title}</i>
          </DialogContentText>
          <DialogContentText>
            Confirm deleting this page by entering its path (
            <code>{page.path}</code>
            ) in the field below.
          </DialogContentText>
          <form>
            <ControlledTextField
              formControl={formControl}
              name="path"
              label="Path"
              rules={{ validate: (value) => value === page.path || 'The path is not correct.' }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggle} color="primary">
            Cancel
          </Button>
          <Button onClick={toggle} color="primary" disabled={path !== page.path}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

DeletePage.propTypes = {
  page: shape({
    id: string.isRequired,
    path: string.isRequired,
  }).isRequired,
};

export default DeletePage;

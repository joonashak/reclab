import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';
import ControlledTextField from '../../controls/ControlledTextField';
import useNotification from '../../GlobalNotification/useNotification';
import usePages from './usePages';
import ADMIN_ROUTES from '../routes';

const DeletePage = ({ page }) => {
  const { setNotification } = useNotification();
  const { removePage } = usePages();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const formControl = useForm({ mode: 'onBlur' });
  const path = formControl.watch('confirm-path');

  const deleteOnClick = async () => {
    // Navigate away first as to not delete a page that is currently being viewed.
    navigate(ADMIN_ROUTES.PAGES);

    try {
      await removePage(page.id);
    } catch {
      setNotification('Deleting page failed.', 'error');
    }

    setNotification('Page deleted!', 'success', true);
  };

  return (
    <form>
      <Button onClick={toggle} data-cy="delete-page">
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
          <ControlledTextField
            formControl={formControl}
            name="confirm-path"
            label="Path"
            rules={{ validate: (value) => value === page.path || 'The path is not correct.' }}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggle} color="primary">
            Cancel
          </Button>
          <Button
            onClick={deleteOnClick}
            color="primary"
            type="submit"
            disabled={path !== page.path}
            data-cy="confirmation-submit"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

DeletePage.propTypes = {
  page: shape({
    id: string.isRequired,
    path: string.isRequired,
  }).isRequired,
};

export default DeletePage;

import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  Button, Grid, Typography, FormControlLabel, Checkbox,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { navigate } from 'gatsby';
import ControlledTextField from '../../controls/ControlledTextField';
import ControlledSelect from '../../controls/ControlledSelect';
import usePages from './usePages';

const NewPage = () => {
  const { addPage } = usePages();
  const formControl = useForm({ mode: 'onBlur' });
  const { handleSubmit, errors, register } = formControl;

  const submit = async (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      await addPage(data);
      navigate('/admin/pages');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          New Page
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <ControlledTextField
          formControl={formControl}
          name="title"
          label="Title"
          rules={{ required: 'Title cannot be empty' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ControlledTextField
          formControl={formControl}
          name="path"
          label="Path"
          rules={{ required: 'Path cannot be empty' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ControlledSelect
          formControl={formControl}
          name="language"
          label="Language"
          rules={{ required: 'Language must be chosen.' }}
          options={[
            { value: 'fi', label: 'Finnish', key: 'new-page-lang-fi' },
            { value: 'en', label: 'English', key: 'new-page-lang-en' },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox name="isPublic" inputRef={register} />}
          label="Page is public."
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ControlledTextField
          formControl={formControl}
          name="content"
          label="Content"
          multiline
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
          Create Page
        </Button>
      </Grid>
    </>
  );
};

NewPage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: PropTypes.string.isRequired,
};

export default NewPage;

import React from 'react';
import {
  arrayOf, func, shape, string,
} from 'prop-types';
import {
  Button, Grid, Typography, FormControlLabel, Checkbox,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ControlledTextField from '../../controls/ControlledTextField';
import ControlledSelect from '../../controls/ControlledSelect';

const PageForm = ({ formControl, onSubmit, translationOptions }) => {
  const {
    handleSubmit, register, watch,
  } = formControl;

  const isPublic = watch('isPublic');

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
      <Grid item xs={12} md={6}>
        <ControlledSelect
          formControl={formControl}
          name="translation"
          label="Translation"
          options={translationOptions}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox name="isPublic" inputRef={register} checked={isPublic} />}
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
          onClick={handleSubmit(onSubmit)}
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

PageForm.propTypes = {
  formControl: shape({
    handleSubmit: func.isRequired,
    watch: func.isRequired,
    register: func.isRequired,
  }).isRequired,
  onSubmit: func.isRequired,
  translationOptions: arrayOf(
    shape({
      value: string.isRequired,
      label: string.isRequired,
      key: string.isRequired,
    }),
  ).isRequired,
};

export default PageForm;

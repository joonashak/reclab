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

const PageForm = ({
  formControl, onSubmit, translationOptions, heading, submitLabel,
}) => {
  const {
    handleSubmit, register,
  } = formControl;

  const { isPublic } = formControl.control.defaultValuesRef.current;

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>{heading}</Typography>
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
        <ControlledTextField
          formControl={formControl}
          name="description"
          label="Description"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ControlledTextField
          formControl={formControl}
          name="keywords"
          label="Keywords"
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
          control={<Checkbox name="isPublic" inputRef={register} defaultChecked={isPublic} />}
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
          data-cy="page-form-submit"
        >
          {submitLabel}
        </Button>
      </Grid>
    </>
  );
};

PageForm.propTypes = {
  formControl: shape({
    handleSubmit: func.isRequired,
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
  heading: string.isRequired,
  submitLabel: string.isRequired,
};

export default PageForm;

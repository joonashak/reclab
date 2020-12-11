import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grid, Typography, FormControlLabel, Checkbox,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ControlledTextField from '../../controls/ControlledTextField';
import ControlledSelect from '../../controls/ControlledSelect';
import usePages from './usePages';

const PageForm = ({ formControl, onSubmit }) => {
  const { pages } = usePages();
  const {
    handleSubmit, errors, register, watch,
  } = formControl;

  const language = watch('language');
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
          options={pages.filter((page) => page.language !== language && !page.translations.length)
            .map((page) => ({ value: page.id, label: page.title, key: `translation-sel-${page.id}` }))}
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
  // eslint-disable-next-line react/no-unused-prop-types
  path: PropTypes.string.isRequired,
  pageId: PropTypes.string,
};

PageForm.defaultProps = {
  pageId: null,
};

export default PageForm;

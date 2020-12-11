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

const NewPage = ({ pageId }) => {
  const { addPage, findPage, pages } = usePages();
  const defaultValues = pageId
    ? { ...findPage(pageId) }
    : {};
  const formControl = useForm({ mode: 'onBlur', defaultValues });
  const {
    handleSubmit, errors, register, watch,
  } = formControl;
  const language = watch('language');

  const submit = async (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    const { translation, ...rest } = data;
    const translationIds = translation === '' ? [] : [translation];

    try {
      await addPage({ ...rest, translationIds });
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
  pageId: PropTypes.string,
};

NewPage.defaultProps = {
  pageId: null,
};

export default NewPage;

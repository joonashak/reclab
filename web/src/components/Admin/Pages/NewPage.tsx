import React from 'react';
import { string } from 'prop-types';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import usePages from './usePages';
import PageForm from './PageForm';
import { getTranslationOptions } from './common';
import useNotification from '../../GlobalNotification/useNotification';
import ADMIN_ROUTES from '../routes';

const NewPage = () => {
  const { setNotification } = useNotification();
  const { addPage, pages } = usePages();
  const formControl = useForm({ mode: 'onBlur' });
  const { errors, watch } = formControl;
  const language = watch('language');

  const onSubmit = async (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    const { translation, ...rest } = data;
    const translationIds = translation === '' ? [] : [translation];

    try {
      await addPage({ ...rest, translationIds });
      setNotification('Page created!', 'success', true);
      navigate(ADMIN_ROUTES.PAGES);
    } catch (error) {
      setNotification('Creating page failed.', 'error');
    }
  };

  const translationOptions = getTranslationOptions(pages, language);

  return (
    <>
      <Helmet>
        <title>New Page</title>
      </Helmet>
      <PageForm
        formControl={formControl}
        onSubmit={onSubmit}
        translationOptions={translationOptions}
        heading="New Page"
        submitLabel="Create Page"
      />
    </>
  );
};

NewPage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
};

export default NewPage;

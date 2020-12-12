import React from 'react';
import { string } from 'prop-types';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';
import usePages from './usePages';
import PageForm from './PageForm';
import { getTranslationOptions } from './common';
import ADMIN_ROUTES from '../routes';

const EditPage = ({ pageId }) => {
  const { updatePage, findPage, pages } = usePages();

  const { translations, ...page } = findPage(pageId);
  const defaultValues = pageId
    ? {
      ...page,
      translation: translations.length ? translations[0].id : '',
    }
    : {};

  const formControl = useForm({ mode: 'onBlur', defaultValues });
  const { errors, watch } = formControl;
  const language = watch('language');

  const onSubmit = async (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    const { translation, ...rest } = data;
    const translationIds = translation === '' ? [] : [translation];

    try {
      await updatePage({ ...rest, id: pageId, translationIds });
      navigate(ADMIN_ROUTES.PAGES);
    } catch (error) {
      console.log(error);
    }
  };

  const defaultId = translations.length ? translations[0].id : null;
  const translationOptions = getTranslationOptions(pages, language, defaultId);

  return (
    <PageForm
      formControl={formControl}
      onSubmit={onSubmit}
      translationOptions={translationOptions}
    />
  );
};

EditPage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
  pageId: string,
};

EditPage.defaultProps = {
  pageId: null,
};

export default EditPage;

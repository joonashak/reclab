import React from 'react';
import { string } from 'prop-types';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import usePages from './usePages';
import PageForm from './PageForm';
import { getTranslationOptions } from './common';
import useNotification from '../../GlobalNotification/useNotification';
import DeletePage from './DeletePage';
import { useAdminNavbarTitle } from '../AdminNavbar/useAdminNavbar';
import adminRoutes from '../adminRoutes';

const EditPage = ({ pageId }) => {
  useAdminNavbarTitle('Edit Page');
  const { setNotification } = useNotification();
  const { updatePage, findPage, pages } = usePages();

  const page = findPage(pageId);

  if (!page) {
    navigate(adminRoutes.pages.fullPath);
    return null;
  }

  const { translations } = page;
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
      setNotification('Page updated!', 'success', true);
      navigate(adminRoutes.pages.fullPath);
    } catch (error) {
      setNotification('Updating page failed.', 'error');
    }
  };

  const defaultId = translations.length ? translations[0].id : null;
  const translationOptions = getTranslationOptions(pages, language, defaultId);

  return (
    <>
      <Helmet>
        <title>{`Edit Page: ${page.title}`}</title>
      </Helmet>
      <DeletePage page={page} />
      <PageForm
        formControl={formControl}
        onSubmit={onSubmit}
        translationOptions={translationOptions}
        heading="Edit Page"
        submitLabel="Update Page"
      />
    </>
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

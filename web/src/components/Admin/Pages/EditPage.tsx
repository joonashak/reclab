import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';
import usePages from './usePages';
import PageForm from './PageForm';

const EditPage = ({ pageId }) => {
  const { addPage, findPage } = usePages();

  const defaultValues = pageId
    ? { ...findPage(pageId) }
    : {};

  const formControl = useForm({ mode: 'onBlur', defaultValues });
  const { errors } = formControl;

  const onSubmit = async (data) => {
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
    <PageForm formControl={formControl} onSubmit={onSubmit} />
  );
};

EditPage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: PropTypes.string.isRequired,
  pageId: PropTypes.string,
};

EditPage.defaultProps = {
  pageId: null,
};

export default EditPage;

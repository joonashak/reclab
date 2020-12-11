import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';
import usePages from './usePages';
import PageForm from './PageForm';

const NewPage = () => {
  const { addPage } = usePages();

  const formControl = useForm({ mode: 'onBlur' });
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

NewPage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: PropTypes.string.isRequired,
};

export default NewPage;

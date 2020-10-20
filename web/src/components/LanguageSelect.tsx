import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby';
import { makePath } from '../util/snippets';

const LanguageSelect = ({ page }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const onChange = (event) => {
    const newLanguage = event.target.value;
    const { translations } = page;
    const { path } = translations.find(
      (translation) => translation.language === newLanguage,
    );

    navigate(makePath(newLanguage, path));
  };

  return (
    <TextField id="language-select" value={language} select onChange={onChange}>
      <MenuItem value="fi">{t('languages.fi')}</MenuItem>
      <MenuItem value="en">{t('languages.en')}</MenuItem>
    </TextField>
  );
};

LanguageSelect.propTypes = {
  page: PropTypes.shape({
    translations: PropTypes.arrayOf(PropTypes.shape({
      language: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default LanguageSelect;

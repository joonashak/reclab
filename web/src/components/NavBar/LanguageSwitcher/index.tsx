import React from 'react';
import { shape, arrayOf, string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import LanguageButton from './LanguageButton';

const LanguageSwitcher = ({ page }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const targetLanguage = language === 'fi' ? 'en' : 'fi';

  const targetTranslation = page.translations.find(
    (translation) => translation.language === targetLanguage,
  );

  const path = targetTranslation ? targetTranslation.path : null;

  return <LanguageButton path={path} />;
};

LanguageSwitcher.propTypes = {
  page: shape({
    translations: arrayOf(shape({
      language: string.isRequired,
      path: string.isRequired,
    })),
  }).isRequired,
};

export default LanguageSwitcher;

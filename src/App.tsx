import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from './hooks/useLanguage';
import i18n from './i18n/i18n';

export default ({ element }) => (
  <I18nextProvider i18n={i18n}>
    <LanguageProvider>
      {element}
    </LanguageProvider>
  </I18nextProvider>
);

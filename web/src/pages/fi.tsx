import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Frontpage from '../components/Frontpage';

export default () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('fi');
  }, []);

  return <Frontpage />;
};

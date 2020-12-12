import React from 'react';
import { shape, arrayOf, string } from 'prop-types';
import { IconButton, makeStyles, createStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import CountryFlag from 'react-country-flag';
import { navigate } from 'gatsby';
import { makePath } from '../../util/snippets';

const useStyles = makeStyles(() => createStyles({
  icon: {
    width: '2.5rem',
    height: '2.5rem',
    overflow: 'hidden',
  },
  flag: {
    width: '2em !important',
    height: '2em !important',
  },
  offsetFlag: {
    width: '2em !important',
    height: '2em !important',
    position: 'relative',
    left: '0.2rem',
  },
}));

const LanguageButton = ({ page }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const targetLanguage = language === 'fi' ? 'en' : 'fi';
  const label = t(`languages.${targetLanguage}`);

  const languageToCountryCode = {
    fi: 'fi',
    en: 'gb',
  };

  const targetTranslation = page.translations.find(
    (translation) => translation.language === targetLanguage,
  );

  const onClick = () => {
    const { path } = targetTranslation;
    navigate(makePath(targetLanguage, path));
  };

  return (
    <IconButton
      aria-label={label}
      disabled={!targetTranslation}
      onClick={onClick}
      className={classes.icon}
    >
      <CountryFlag
        countryCode={languageToCountryCode[targetLanguage]}
        svg
        title={label}
        className={targetLanguage === 'fi' ? classes.offsetFlag : classes.flag}
      />
    </IconButton>
  );
};

LanguageButton.propTypes = {
  page: shape({
    translations: arrayOf(shape({
      language: string.isRequired,
      path: string.isRequired,
    })),
  }).isRequired,
};

export default LanguageButton;

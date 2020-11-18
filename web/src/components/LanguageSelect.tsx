import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItemIcon, MenuItem, TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby';
import CountryFlag from 'react-country-flag';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { makePath } from '../util/snippets';

const useStyles = makeStyles(() => createStyles({
  root: {
    border: 'none',
  },
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
}));

const LanguageSelect = ({ page }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const classes = useStyles();

  const getTranslation = (lang: string) => page.translations.find(
    (translation) => translation.language === lang,
  );

  const onChange = (event) => {
    const newLanguage = event.target.value;
    const { path } = getTranslation(newLanguage);

    navigate(makePath(newLanguage, path));
  };

  const isDisabled = (lang: string): boolean => {
    const translation = getTranslation(lang);

    if (page.language === lang) {
      return false;
    }

    return !translation;
  };

  return (
    <TextField
      id="language-select"
      value={language}
      select
      onChange={onChange}
      className={classes.root}
      InputProps={{ classes }}
    >
      <MenuItem value="fi" disabled={isDisabled('fi')}>
        <ListItemIcon>
          <CountryFlag countryCode="fi" svg title={t('languages.fi')} />
        </ListItemIcon>
      </MenuItem>
      <MenuItem value="en" disabled={isDisabled('en')}>
        <ListItemIcon>
          <CountryFlag countryCode="gb" svg title={t('languages.en')} />
        </ListItemIcon>
      </MenuItem>
    </TextField>
  );
};

LanguageSelect.propTypes = {
  page: PropTypes.shape({
    language: PropTypes.string.isRequired,
    translations: PropTypes.arrayOf(PropTypes.shape({
      language: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default LanguageSelect;

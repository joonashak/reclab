import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItemIcon, MenuItem, TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby';
import CountryFlag from 'react-country-flag';
import styled from 'styled-components';
import { makePath } from '../util/snippets';

const StyledTextField = styled(TextField)`
  .MuiInput-underline:before, .MuiInput-underline:hover:before {
    border: none;
  }
`;

const StyledFlag = styled(CountryFlag)`
  width: 2em !important;
  height: 2em !important;
`;

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
    <StyledTextField id="language-select" value={language} select onChange={onChange}>
      <MenuItem value="fi">
        <ListItemIcon>
          <StyledFlag countryCode="fi" svg title={t('languages.fi')} />
        </ListItemIcon>
      </MenuItem>
      <MenuItem value="en">
        <ListItemIcon>
          <StyledFlag countryCode="gb" svg title={t('languages.en')} />
        </ListItemIcon>
      </MenuItem>
    </StyledTextField>
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

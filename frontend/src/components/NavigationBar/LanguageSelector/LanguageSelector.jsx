import React from 'react';
// STYLE
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// HOOKS
import { useTranslation } from 'react-i18next';
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
// CONSTANTS
import { LANGUAGES } from 'i18n/client';

const LanguageSelector = () => {
  const { t } = useTranslationWithNamespaces();
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <FormControl margin="dense">
      <Select
        value={localStorage.getItem('i18nextLng') ?? LANGUAGES.HUN.code}
        onChange={handleChange}
      >
        {Object.keys(LANGUAGES).map((lang) => {
          const language = LANGUAGES[lang];
          const { displayName, code } = language;

          return (
            <MenuItem key={code} value={code}>
              {t.common(displayName)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const LANGUAGES = {
  ENG: {
    displayName: 'English',
    code: 'en',
  },
  HUN: {
    displayName: 'Hungarian',
    code: 'hu',
  },
};

export const NAMESPACES = {
  COMMON: {
    value: 'common',
  },
};

const getDefaultLanguage = () => LANGUAGES.HUN.code;

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: getDefaultLanguage(),
    fallbackLng: 'hu',
    debug: false,
    // whitelist: Object.values(LANGUAGES).map((language) => language.code),
    ns: Object.values(NAMESPACES).map((namespace) => namespace.value),
    defaultNS: NAMESPACES.COMMON.value,
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'loaded languageChanged',
      bindI18nStore: 'added',
      useSuspense: true,
    },
  });

export default i18n;

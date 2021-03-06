import { useTranslation } from 'react-i18next';
import { NAMESPACES } from 'i18n/client';

const useTranslationWithNamespaces = () => {
  const { t } = useTranslation();
  const translate = (namespace, text, params = null) =>
    t(`${namespace}:${text}`, { ...params });

  return {
    t: {
      common: (text, params) => translate(NAMESPACES.COMMON.value, text, params),
      element: (text, params) => translate(NAMESPACES.ELEMENT.value, text, params),
      errors: (text, params) => translate(NAMESPACES.ERRORS.value, text, params),
    },
  };
};

export default useTranslationWithNamespaces;

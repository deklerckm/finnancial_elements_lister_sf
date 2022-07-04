import React from 'react';
// STYLE
import TextField from '@mui/material/TextField';
// CONSTANTS
import { SEARCH_OPTIONS_DEFAULT_VALUE } from 'constants/searchOptions';
// HOOKS
import useUrlState from '@ahooksjs/use-url-state';
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
// UTILS
import { getStringifiedObjectParsedValue } from 'utils/getStringifiedObjectParsedValue';

const ElementListSearchSingleOptionTextfield = ({ searchOption }) => {
  const { id } = searchOption;
  const { t } = useTranslationWithNamespaces();
  const [urlParams, setUrlParams] = useUrlState(SEARCH_OPTIONS_DEFAULT_VALUE);
  const defaultValue = getStringifiedObjectParsedValue(urlParams[id])?.value ?? '';

  const changedHandler = (e) => {
    setUrlParams((prevUrlParams) => {
      const prevStringifiedValue = getStringifiedObjectParsedValue(prevUrlParams[id], {});
      return {
        ...prevUrlParams,
        [id]: JSON.stringify({
          ...prevStringifiedValue,
          value: e.target.value,
        }),
      };
    });
  };

  return (
    <TextField defaultValue={defaultValue} onBlur={changedHandler} label={t.common(id)} />
  );
};

export default ElementListSearchSingleOptionTextfield;

import React from 'react';
// STYLE
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// HOOKS
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
import useUrlState from '@ahooksjs/use-url-state';
// CONSTANS
import { SEARCH_OPTIONS_DEFAULT_VALUE } from 'constants/searchOptions';
// UTILS
import { getStringifiedObjectParsedValue } from 'utils/getStringifiedObjectParsedValue';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ElementListSearchSingleOptionMultiSelect = ({ searchOption }) => {
  const { id, options } = searchOption;
  const [urlParams, setUrlParams] = useUrlState(SEARCH_OPTIONS_DEFAULT_VALUE);
  const { t } = useTranslationWithNamespaces();
  const theme = useTheme();
  const urlParamObject = getStringifiedObjectParsedValue(urlParams[id], {});

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    const realValue = typeof value === 'string' ? value.split(',') : value;

    setUrlParams((prevUrlParams) => ({
      ...prevUrlParams,
      [id]: JSON.stringify({ ...urlParamObject, value: realValue }),
    }));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-multiple-name-label">{t.common(id)}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={urlParamObject.value ?? []}
        onChange={handleChange}
        input={<OutlinedInput label={t.common(id)} />}
        MenuProps={MenuProps}
      >
        {options.map((option) => {
          const { value, labelKey } = option;
          return (
            <MenuItem
              key={value}
              value={value}
              style={getStyles(value, urlParamObject.value ?? [], theme)}
            >
              {t.common(labelKey)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ElementListSearchSingleOptionMultiSelect;

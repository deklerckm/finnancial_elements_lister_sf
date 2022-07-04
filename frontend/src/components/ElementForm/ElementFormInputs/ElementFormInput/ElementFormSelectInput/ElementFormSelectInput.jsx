import React from 'react';
import { onPropertyChanged } from 'features/element/elementSlice';
// STYLE
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// HOOKS
import { useDispatch } from 'react-redux';
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';

const ElementFormSelectInput = ({ inputObject, value }) => {
  const { id, options } = inputObject;
  const dispatch = useDispatch();
  const { t } = useTranslationWithNamespaces();

  const selectChangedHandler = (e) => {
    dispatch(onPropertyChanged({ [id]: e.target.value }));
  };
  return (
    <FormControl size="small" fullWidth>
      <Select value={value} onChange={selectChangedHandler} fullWidth>
        {options.map((option) => {
          const { value: optionValue, labelKey } = option;
          return (
            <MenuItem key={optionValue} value={optionValue}>
              {t.common(labelKey)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ElementFormSelectInput;

import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
// CONSTANS
import { CURRENCIES } from 'constants/currencies';
import { CATEGORIES } from 'constants/categories';
// COMPONENTS
import ElementFormInput from './ElementFormInput/ElementFormInput';

export const ELEMENT_INPUTS = [
  {
    id: 'summary',
    validation: {
      required: 'required',
    },
  },
  {
    id: 'category',
    type: 'select',
    options: CATEGORIES.map((category) => {
      const { id } = category;

      return {
        value: id,
        labelKey: id,
      };
    }),
    validation: {
      required: 'required',
    },
  },
  {
    id: 'sum',
    type: 'number',
    validation: {
      required: 'required',
    },
  },
  {
    id: 'currency',
    type: 'select',
    options: CURRENCIES.map((currency) => {
      const { id, labelKey } = currency;

      return {
        value: id,
        labelKey,
      };
    }),
    validation: {
      required: 'required',
    },
  },
  {
    id: 'paid',
    type: 'date',
    validation: {
      required: 'required',
    },
  },
];

const ElementFormInputs = ({ isSubmitted, readOnly }) => {
  return (
    <Grid container direction="column" spacing={2}>
      {ELEMENT_INPUTS.map((inputObject) => {
        const { id } = inputObject;
        return (
          <Grid item key={id}>
            <ElementFormInput
              inputObject={inputObject}
              isSubmitted={isSubmitted}
              readOnly={readOnly}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ElementFormInputs;

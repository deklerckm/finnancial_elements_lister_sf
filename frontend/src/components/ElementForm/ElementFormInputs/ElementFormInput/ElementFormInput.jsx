import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// HOOKS
import { useSelector } from 'react-redux';
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
// COMPONENTS
import ElementFormTextfieldInput from './ElementFormTextfieldInput/ElementFormTextfieldInput';
import ElementFormSelectInput from './ElementFormSelectInput/ElementFormSelectInput';

const ElementFormInput = ({ inputObject, isSubmitted }) => {
  const { id, type, validation } = inputObject;
  const { value: element } = useSelector((state) => state.element);
  const value = element[id];
  const { t } = useTranslationWithNamespaces();

  const getErrorMessage = () => {
    if (!isSubmitted) {
      return false;
    }

    if (validation.required && !value) {
      return validation.required;
    }

    return false;
  };

  let input = null;

  switch (type) {
    case 'select':
      input = <ElementFormSelectInput inputObject={inputObject} value={value} />;
      break;
    default:
      input = <ElementFormTextfieldInput inputObject={inputObject} value={value} />;
  }

  return (
    <Grid container>
      <Grid item xs={3}>
        <Typography>{t.common(id)}</Typography>
      </Grid>
      <Grid item xs={9}>
        <Grid container direction="column">
          <Grid item>{input}</Grid>
          {getErrorMessage() ? (
            <Grid item sx={{ color: 'red' }}>
              {t.common(getErrorMessage())}
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ElementFormInput;

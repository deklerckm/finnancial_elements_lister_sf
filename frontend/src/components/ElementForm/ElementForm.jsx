import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
// COMPONENTS
import ElementFormInputs from './ElementFormInputs/ElementFormInputs';

const ElementForm = ({ isSubmitted, readOnly }) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <ElementFormInputs isSubmitted={isSubmitted} readOnly={readOnly} />
      </Grid>
    </Grid>
  );
};

export default ElementForm;

import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
// COMPONENTS
import ElementFormInputs from './ElementFormInputs/ElementFormInputs';

const ElementForm = ({ isSubmitted }) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <ElementFormInputs isSubmitted={isSubmitted} />
      </Grid>
    </Grid>
  );
};

export default ElementForm;

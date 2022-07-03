import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
// REDUX
import { useSelector } from 'react-redux';
// COMPONENTS
import ElementListElement from './ElementListElement/ElementListElement';

const ElementList = () => {
  const { value: elements, loading } = useSelector((state) => state.elements);

  if (loading) return <div>@TODO SKELETON</div>;

  return (
    <Grid container direction="column" spacing={2} wrap="nowrap">
      {elements.map((element) => {
        const { _id: id } = element;

        return (
          <Grid item key={id}>
            <ElementListElement element={element} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ElementList;

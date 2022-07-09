import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
// REDUX
import { useSelector } from 'react-redux';
// HOOKS
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
// COMPONENTS
import ElementListElement from './ElementListElement/ElementListElement';

const ElementList = () => {
  const { t } = useTranslationWithNamespaces();
  const { value: elements, loading } = useSelector((state) => state.elements);
  if (loading) return <div>@TODO SKELETON</div>;

  if (elements.length === 0) {
    return <div>{t.common('no_records_found')}</div>;
  }

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      wrap="nowrap"
      sx={{ padding: '.2rem' }}
    >
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

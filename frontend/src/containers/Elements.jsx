import React, { useEffect } from 'react';
// STYLE
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// API
import axiosClient from 'api/client';
// REDUX
import { useDispatch } from 'react-redux';
import { loadElements, resetElements, onLoading } from 'features/element/elementsSlice';
// COMPONENTS
import ElementList from 'components/ElementList/ElementList';

const Elements = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onLoading());
    axiosClient
      .get('/elements')
      .then((res) => {
        dispatch(loadElements(res.data.nodes));
      })
      .catch((err) => {
        // @TODO GLOBAL ERRORKEZELÉS
      });

    return () => {
      dispatch(resetElements());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Grid container direction="column">
        <Grid item>SZŰRÉS</Grid>
        <Grid item>
          <ElementList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Elements;

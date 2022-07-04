import React, { useEffect } from 'react';
// STYLE
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// API
import axiosClient from 'api/client';
// REDUX
import { useDispatch } from 'react-redux';
import { loadElements, resetElements, onLoading } from 'features/element/elementsSlice';
// HOOKS
import useUrlState from '@ahooksjs/use-url-state';
// CONSTANTS
import { SEARCH_OPTIONS, SEARCH_OPTIONS_DEFAULT_VALUE } from 'constants/searchOptions';
// UTILS
import { getStringifiedObjectParsedValue } from 'utils/getStringifiedObjectParsedValue';
// COMPONENTS
import ElementList from 'components/ElementList/ElementList';
import ElementListSearch from 'components/ElementListSearch/ElementListSearch';
import SummedCurrencies from 'components/SummedCurrencies/SummedCurrencies';

const Elements = () => {
  const dispatch = useDispatch();
  const [urlParams] = useUrlState(SEARCH_OPTIONS_DEFAULT_VALUE);

  useEffect(() => {
    queryElements();
    return () => {
      dispatch(resetElements());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const queryElements = () => {
    const filterUrl = Object.keys(urlParams).reduce((acc, currentParam) => {
      const searchOption = SEARCH_OPTIONS.find(({ id }) => id === currentParam);
      const parsedUrlParam = getStringifiedObjectParsedValue(urlParams[currentParam], {});

      if (!searchOption || !parsedUrlParam.value || parsedUrlParam.value.length === 0) {
        return acc;
      }

      return `${acc.length > 0 ? `${acc}&` : acc}${currentParam}=${parsedUrlParam.value}`;
    }, '');

    dispatch(onLoading());
    axiosClient
      .get(`/elements?${filterUrl}`)
      .then((res) => {
        dispatch(loadElements(res.data.nodes));
      })
      .catch((err) => {
        // @TODO GLOBAL ERRORKEZELÉS
      });
  };

  return (
    <Container>
      <Grid container direction="column">
        <Grid item>
          <ElementListSearch queryElements={queryElements} />
        </Grid>
        <Grid item>
          <ElementList />
        </Grid>
        <Grid item>
          <SummedCurrencies />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Elements;

import React, { useState, useEffect } from 'react';
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
import { SEARCH_OPTIONS, URL_STATE_DEFAULT_VALUE } from 'constants/searchOptions';
// UTILS
import { getStringifiedObjectParsedValue } from 'utils/getStringifiedObjectParsedValue';
import { getDivsHeight } from 'utils/getDivsHeight';
// COMPONENTS
import ElementList from 'components/ElementList/ElementList';
import ElementListSearch from 'components/ElementListSearch/ElementListSearch';
// import SummedCurrencies from 'components/SummedCurrencies/SummedCurrencies';
import ElementsPagination from 'components/ElementsPagination/ElementsPagination';
// CONTAINERS
import ViewAndUpdateElementModal from 'containers/ViewAndUpdateElementModal/ViewAndUpdateElementModal';

const Elements = () => {
  const dispatch = useDispatch();
  const [urlParams] = useUrlState(URL_STATE_DEFAULT_VALUE);
  const { page: urlPage } = urlParams;

  const [listMaxHeight, setListMaxHeight] = useState(undefined);

  useEffect(() => {
    queryElements();

    setListMaxHeight(
      window.innerHeight - getDivsHeight(['appBar', 'searchInterface', 'pagination'])
    );

    return () => {
      dispatch(resetElements());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPage = (newPage) => {
    if (!isNaN(newPage)) {
      return newPage;
    }

    if (!isNaN(urlPage)) {
      return urlPage;
    }

    return 0;
  };

  const queryElements = (newPage) => {
    const filterUrl = Object.keys(urlParams).reduce((acc, currentParam) => {
      const searchOption = SEARCH_OPTIONS.find(({ id }) => id === currentParam);
      const parsedUrlParam = getStringifiedObjectParsedValue(urlParams[currentParam], {});

      if (!searchOption || !parsedUrlParam.value || parsedUrlParam.value.length === 0) {
        return acc;
      }

      return `${acc.length > 0 ? `${acc}&` : acc}${currentParam}=${parsedUrlParam.value}`;
    }, '');

    dispatch(onLoading());

    const page = getPage(newPage);

    axiosClient
      .get(`/elements?${filterUrl}${filterUrl.length > 0 ? '&' : ''}page=${page}`)
      .then((res) => {
        dispatch(
          loadElements({ nodes: res.data.nodes, count: res.data.aggregate.count })
        );
      })
      .catch((err) => {
        // @TODO GLOBAL ERRORKEZELÉS
      });
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container direction="column" spacing={1}>
          <Grid item id="searchInterface">
            <ElementListSearch queryElements={queryElements} />
          </Grid>
          <Grid item sx={{ maxHeight: listMaxHeight, overflow: 'auto' }}>
            <ElementList queryElements={queryElements}/>
          </Grid>
          {/* <Grid item id="listMetadata">
          <SummedCurrencies />
        </Grid> */}
          <Grid item id="pagination">
            <ElementsPagination queryElements={queryElements} />
          </Grid>
        </Grid>
      </Container>
      <ViewAndUpdateElementModal queryElements={queryElements} />
    </React.Fragment>
  );
};

export default Elements;

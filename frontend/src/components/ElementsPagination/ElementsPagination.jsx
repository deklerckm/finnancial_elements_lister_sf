import React from 'react';
// STYLE
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
// HOOKS
import { useSelector } from 'react-redux';
import useUrlState from '@ahooksjs/use-url-state';
// CONSTANTS
import { URL_STATE_DEFAULT_VALUE } from 'constants/searchOptions';

const ElementsPagination = ({ queryElements }) => {
  const { count } = useSelector((state) => state.elements);
  const [urlParams, setUrlParams] = useUrlState(URL_STATE_DEFAULT_VALUE);
  const { page } = urlParams;

  const handleChange = (event, value) => {
    const newPage = value - 1;

    setUrlParams((prevUrlParams) => ({
      ...prevUrlParams,
      page: newPage,
    }));

    queryElements(newPage);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Pagination
          count={Math.ceil(count / 10)}
          page={+page + 1 ?? 1}
          onChange={handleChange}
          color="primary"
        />
      </Grid>
    </Grid>
  );
};

export default ElementsPagination;

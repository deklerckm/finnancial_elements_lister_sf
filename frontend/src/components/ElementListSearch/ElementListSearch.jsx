import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// HOOKS
import useUrlState from '@ahooksjs/use-url-state';
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
// CONSTANTS
import { SEARCH_OPTIONS, URL_STATE_DEFAULT_VALUE } from 'constants/searchOptions';
// UTILS
import { getStringifiedObjectParsedValue } from 'utils/getStringifiedObjectParsedValue';
// COMPONENTS
import ElementListSearchMoreMenu from './ElementListSearchMoreMenu/ElementListSearchMoreMenu';
import ElementListSearchSingleOption from './ElementListSearchSingleOption/ElementListSearchSingleOption';
// import ElementListSearchSingleOptionTextfield from './ElementListSearchSingleOption/ElementListSearchSingleOptionTextfield/ElementListSearchSingleOptionTextfield';

const ElementListSearch = ({ queryElements }) => {
  const [urlParams] = useUrlState(URL_STATE_DEFAULT_VALUE);
  const { t } = useTranslationWithNamespaces();

  const onSearch = (e) => {
    e.preventDefault();
    queryElements(0);
  };

  return (
    <Grid
      container
      alignItems="center"
      wrap="nowrap"
      spacing={1}
      sx={{ margin: '.5rem 0' }}
    >
      <Grid item>
        <Grid container alignItems="center" spacing={1}>
          {Object.keys(urlParams).map((searchOptionId) => {
            const { visible } =
              getStringifiedObjectParsedValue(urlParams[searchOptionId], {}) ?? {};
            if (!visible) {
              return null;
            }

            const searchOption = SEARCH_OPTIONS.find(({ id }) => searchOptionId === id);
            if (!searchOption) return null;

            return (
              <Grid item key={searchOptionId}>
                <ElementListSearchSingleOption searchOption={searchOption} />
              </Grid>
            );
          })}
          <Grid item>
            <ElementListSearchMoreMenu />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button onClick={onSearch}>{t.common('search')}</Button>
      </Grid>
    </Grid>
  );
};

export default ElementListSearch;

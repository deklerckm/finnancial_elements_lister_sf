import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
// ICONS
import DeleteIcon from '@mui/icons-material/Delete';
// HOOKS
import useUrlState from '@ahooksjs/use-url-state';
// CONSTANTS
import {
  SEARCH_OPTIONS_DEFAULT_VALUE,
  SEARH_OPTION_TYPES,
} from 'constants/searchOptions';
// COMPONENTS
import ElementListSearchSingleOptionMultiSelect from './ElementListSearchSingleOptionMultiSelect/ElementListSearchSingleOptionMultiSelect';
import ElementListSearchSingleOptionTextfield from './ElementListSearchSingleOptionTextfield/ElementListSearchSingleOptionTextfield';

const ElementListSearchSingleOption = ({ searchOption }) => {
  const { type } = searchOption;
  const [urlParams, setUrlParams] = useUrlState(SEARCH_OPTIONS_DEFAULT_VALUE);
  //   const value = urlParams[searchOption.id];

  const deleteClickedHandler = () => {
    setUrlParams({
      ...urlParams,
      [searchOption.id]: JSON.stringify({
        visible: false,
        value: type === SEARH_OPTION_TYPES.multiSelect ? [] : '',
      }),
    });
  };

  let inputfield = null;

  switch (type) {
    case SEARH_OPTION_TYPES.multiSelect:
      inputfield = (
        <ElementListSearchSingleOptionMultiSelect searchOption={searchOption} />
      );
      break;
    default:
      inputfield = <ElementListSearchSingleOptionTextfield searchOption={searchOption} />;
  }

  return (
    <Grid container alignItems="center">
      <Grid item>{inputfield}</Grid>
      <Grid item>
        <IconButton onClick={deleteClickedHandler}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ElementListSearchSingleOption;

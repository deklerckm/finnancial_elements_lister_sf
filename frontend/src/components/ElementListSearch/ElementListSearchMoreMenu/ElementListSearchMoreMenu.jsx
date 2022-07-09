import React, { useState } from 'react';
// STYLE
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// HOOKS
import useUrlState from '@ahooksjs/use-url-state';
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
// CONSTANTS
import {
  SEARCH_OPTIONS,
  URL_STATE_DEFAULT_VALUE,
  SEARH_OPTION_TYPES,
} from 'constants/searchOptions';
// UTILS
import { getStringifiedObjectParsedValue } from 'utils/getStringifiedObjectParsedValue';

const ElementListSearchMoreMenu = () => {
  const [urlParams, setUrlParams] = useUrlState(URL_STATE_DEFAULT_VALUE);
  const { t } = useTranslationWithNamespaces();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const searchOptionClickedHandler = (option) => {
    const { id: searchId, type } = option;
    setUrlParams((prevUrlParams) => ({
      ...prevUrlParams,
      [searchId]: JSON.stringify({
        visible: true,
        value: type === SEARH_OPTION_TYPES.multiSelect ? [] : '',
      }),
    }));
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick} variant="contained">{`+ ${t.common('more')}`}</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {SEARCH_OPTIONS.map((option) => {
          const { id, labelKey } = option;

          return (
            <MenuItem
              key={id}
              onClick={() => searchOptionClickedHandler(option)}
              disabled={
                getStringifiedObjectParsedValue(
                  urlParams[
                    Object.keys(urlParams).find((urlParamKey) => id === urlParamKey)
                  ],
                  {}
                ).visible
              }
            >
              {t.common(labelKey)}
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
};

export default ElementListSearchMoreMenu;

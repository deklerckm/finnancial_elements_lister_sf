import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
// ICONS
import IconButton from '@mui/material/IconButton';
import ArticleIcon from '@mui/icons-material/Article';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// CONSTANTS
import { MODAL_TYPES, URL_STATE_DEFAULT_VALUE } from 'constants/searchOptions';
// HOOKS
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
import useUrlState from '@ahooksjs/use-url-state';

const ElementListElementOperationButtons = ({ id }) => {
  const { t } = useTranslationWithNamespaces();
  // eslint-disable-next-line no-unused-vars
  const [_, setUrlParams] = useUrlState(URL_STATE_DEFAULT_VALUE);

  const operationButtons = [
    {
      id: 'view',
      icon: <ArticleIcon color="primary" />,
      label: t.common('view'),
      handler: () => {
        setUrlParams((prevUrlParams) => ({
          ...prevUrlParams,
          modal: JSON.stringify({ type: MODAL_TYPES.view, id }),
        }));
      },
    },
    {
      id: 'edit',
      icon: <EditIcon />,
      label: t.common('edit'),
    },
    {
      id: 'delete',
      icon: <DeleteIcon color="secondary" />,
      label: t.common('delete'),
    },
  ];

  return (
    <Grid container direction="column">
      {operationButtons.map((button) => {
        const { id: buttonId, icon, label, handler } = button;
        return (
          <Grid item key={buttonId}>
            <Tooltip title={label}>
              <IconButton onClick={handler}>{icon}</IconButton>
            </Tooltip>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ElementListElementOperationButtons;

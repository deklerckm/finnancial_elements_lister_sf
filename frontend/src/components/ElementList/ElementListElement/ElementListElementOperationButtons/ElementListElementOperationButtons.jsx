import React from 'react';
import axiosClient from 'api/client';
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
import { useSnackbar } from 'notistack';
// HOC
import withDialog from 'hoc/withDialog';

const ElementListElementOperationButtons = ({
  id,
  summary,
  queryElements,
  openDialog,
}) => {
  const { t } = useTranslationWithNamespaces();
  const { enqueueSnackbar } = useSnackbar();
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
      handler: () => {
        setUrlParams((prevUrlParams) => ({
          ...prevUrlParams,
          modal: JSON.stringify({ type: MODAL_TYPES.edit, id }),
        }));
      },
    },
    {
      id: 'delete',
      icon: <DeleteIcon color="secondary" />,
      label: t.common('delete'),
      handler: () => {
        openDialog({
          description: t.element('delete_element_for_sure', { title: summary }),
          buttons: [
            {
              text: t.common('close'),
              props: { color: 'secondary' },
              onClick: () => {
                return null;
              },
            },
            {
              text: t.common('delete'),
              onClick: () => {
                axiosClient.delete(`/elements/${id}`).then((res) => {
                  queryElements();
                  enqueueSnackbar(
                    t.common('deleted_sucessfully', { title: res.data.summary }),
                    {
                      variant: 'success',
                    }
                  );
                });
              },
            },
          ],
        });
      },
    },
  ];

  return (
    <Grid container wrap="nowrap">
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

export default withDialog(ElementListElementOperationButtons);

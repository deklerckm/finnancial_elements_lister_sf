import React from 'react';
// STYLE
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
// ICONS
import IconButton from '@mui/material/IconButton';
import ArticleIcon from '@mui/icons-material/Article';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// HOOKS
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';

const ElementListElementOperationButtons = (props) => {
  const { t } = useTranslationWithNamespaces();
  const operationButtons = [
    {
      id: 'view',
      icon: <ArticleIcon color="primary" />,
      label: t.common('view'),
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
        const { id, icon, label } = button;
        return (
          <Grid item key={id}>
            <Tooltip title={label}>
              <IconButton>{icon}</IconButton>
            </Tooltip>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ElementListElementOperationButtons;

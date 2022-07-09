import React, { useState } from 'react';
import axiosClient from 'api/client';
// STYLE
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// HOOKS
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
import { useSelector } from 'react-redux';
import useUrlState from '@ahooksjs/use-url-state';
import { useSnackbar } from 'notistack';
// UTILS
import { getStringifiedObjectParsedValue } from 'utils/getStringifiedObjectParsedValue';
import isEqual from 'lodash.isequal';
import { validateElementInputs } from 'utils/validateElementInputs';
// HOC
import withDialog from 'hoc/withDialog';
// CONSTANTS
import { ELEMENT_INPUTS } from 'components/ElementForm/ElementFormInputs/ElementFormInputs';
// COMPONENTS
import ViewAndUpdateElementContainer from 'components/ViewAndUpdateElementContainer/ViewAndUpdateElementContainer';
import { MODAL_TYPES, URL_STATE_DEFAULT_VALUE } from 'constants/searchOptions';

const ViewAndUpdateElementModal = ({ queryElements, openDialog }) => {
  const [urlParams, setUrlParams] = useUrlState(URL_STATE_DEFAULT_VALUE);
  const { modal: stringifiedModalObject } = urlParams;
  const modalObject = getStringifiedObjectParsedValue(stringifiedModalObject);
  const { type, id } = modalObject;
  const { value: element, defaultValue: defaultElement } = useSelector(
    (state) => state.element
  );
  const { t } = useTranslationWithNamespaces();
  const { enqueueSnackbar } = useSnackbar();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const closeModal = () => {
    setUrlParams((prevUrlParams) => ({
      ...prevUrlParams,
      modal: JSON.stringify({
        type: '',
        id: '',
      }),
    }));
  };

  const editClickedHandler = () => {
    if (!isSubmitted) {
      setIsSubmitted(true);
    }
    if (isEqual(element, defaultElement)) {
      // NEM TÖRTÉNT VÁLTOZÁS
      return openDialog({
        description: t.common('no_changes_were_made'),
      });
    }

    // VALIDATION
    if (!validateElementInputs(element)) {
      return null;
    }

    const changedValues = ELEMENT_INPUTS.reduce((acc, currentInput) => {
      const { id: inputId } = currentInput;

      if (element[inputId] === defaultElement[inputId]) {
        return acc;
      }

      return {
        ...acc,
        [inputId]: element[inputId],
      };
    }, {});

    return axiosClient
      .patch(`/elements/${id}`, changedValues)
      .then((res) => {
        queryElements();
        enqueueSnackbar(
          t.common('updated_sucessfully', { title: defaultElement.summary }),
          {
            variant: 'success',
          }
        );
        closeModal();
      })
      .catch((err) => {
        // @TODO GLOBAL NETWORK ERRORKEZELÉS
      });
  };

  return (
    <Dialog
      open={type === MODAL_TYPES.view || type === MODAL_TYPES.edit}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle sx={{ fontWeight: 700 }}>
        {t.element(type === MODAL_TYPES.edit ? 'edit_element' : 'view_element', {
          element: defaultElement.summary,
        })}
      </DialogTitle>
      <DialogContent>
        <Container sx={{ margin: '1rem 0' }}>
          <ViewAndUpdateElementContainer
            id={id}
            readOnly={type !== MODAL_TYPES.edit}
            isSubmitted={isSubmitted}
          />
        </Container>
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="flex-end" spacing={1}>
          {type === MODAL_TYPES.edit ? (
            <Grid item>
              <Button variant="contained" onClick={editClickedHandler}>
                {t.common('edit')}
              </Button>
            </Grid>
          ) : null}
          <Grid item>
            <Button variant="contained" onClick={closeModal} color="secondary">
              {t.common('close')}
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default withDialog(ViewAndUpdateElementModal);

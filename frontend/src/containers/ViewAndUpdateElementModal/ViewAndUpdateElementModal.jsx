import React from 'react';
// STYLE
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
// UTILS
import { getStringifiedObjectParsedValue } from 'utils/getStringifiedObjectParsedValue';
// COMPONENTS
import ViewAndUpdateElementContainer from 'components/ViewAndUpdateElementContainer/ViewAndUpdateElementContainer';
import { MODAL_TYPES, URL_STATE_DEFAULT_VALUE } from 'constants/searchOptions';

const ViewAndUpdateElementModal = () => {
  const [urlParams, setUrlParams] = useUrlState(URL_STATE_DEFAULT_VALUE);
  const { modal: stringifiedModalObject } = urlParams;
  const modalObject = getStringifiedObjectParsedValue(stringifiedModalObject);
  const { type, id } = modalObject;
  const { value: element } = useSelector((state) => state.element);
  const { t } = useTranslationWithNamespaces();

  const closedClickedHandler = () => {
    setUrlParams((prevUrlParams) => ({
      ...prevUrlParams,
      modal: JSON.stringify({
        type: '',
        id: '',
      }),
    }));
  };

  return (
    <Dialog
      open={type === MODAL_TYPES.view || type === MODAL_TYPES.view}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle sx={{ fontWeight: 700 }}>
        {t.element('view_element', { element: element.summary })}
      </DialogTitle>
      <DialogContent>
        <Container sx={{ margin: '1rem 0' }}>
          <ViewAndUpdateElementContainer id={id} />
        </Container>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={closedClickedHandler} color="secondary">
          {t.common('close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewAndUpdateElementModal;

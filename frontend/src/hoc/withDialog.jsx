import React, { useState } from 'react';
// STYLE
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const withDialog = (Wrapped) => (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(null);
  const [dialogDescription, setDialogDescription] = useState(null);
  const [buttons, setButtons] = useState(null);

  const reset = () => {
    setIsOpen(false);
    setDialogTitle(null);
    setDialogDescription(null);
    setButtons(null);
  };

  /**
   * @param {Object} parameters - Dialog parameters
   * @param {string} parameters.description - (required) Text shown in dialog body
   * @param {string} parameters.title - (optional) Text shown in dialog title
   * @param {Object[]} parameters.buttons - (optional) Buttons to show at the bottom of
   *   the dialog. If not set, an "OK" button will appear
   * @param {string} parameters.buttons[].text - (required) Button text
   * @param {Object} parameters.buttons.props - (optional) Properties to pass to Button component
   * @param {function} parameters.buttons[].onClick - (optional) Button action to call. If
   *   not set, button will close dialog
   * @returns
   */
  const openDialog = (parameters) => {
    reset();

    if (typeof parameters.description !== 'string') {
      return;
    }

    setDialogDescription(parameters.description);
    setIsOpen(true);

    if (typeof parameters.title === 'string') {
      setDialogTitle(parameters.title);
    }

    if (Array.isArray(parameters.buttons)) {
      setButtons(parameters.buttons);
    } else {
      setButtons([
        {
          text: 'ok',
          onClick: null,
        },
      ]);
    }
  };

  const closeDialog = () => {
    reset();
  };

  const renderDialog = () => {
    if (!isOpen) {
      return null;
    }

    const renderedButtons = buttons?.map((btn, index) => (
      <Button
        key={`dialog_btn_${index}`}
        onClick={
          typeof btn.onClick === 'function'
            ? () => {
                btn.onClick();
                closeDialog();
              }
            : closeDialog
        }
        color="primary"
        {...btn.props}
      >
        {btn.text}
      </Button>
    ));

    return (
      <Dialog open={isOpen}>
        <DialogTitle>{dialogTitle ?? ''}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogDescription}</DialogContentText>
        </DialogContent>
        <DialogActions>{renderedButtons}</DialogActions>
      </Dialog>
    );
  };

  const newProps = { ...props, openDialog, closeDialog };
  Object.preventExtensions(newProps);

  return (
    <React.Fragment>
      <Wrapped {...newProps} />
      {renderDialog()}
    </React.Fragment>
  );
};

export default withDialog;

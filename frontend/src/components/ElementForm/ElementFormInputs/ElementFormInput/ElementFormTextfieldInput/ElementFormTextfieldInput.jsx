import React from 'react';
import { onPropertyChanged } from 'features/element/elementSlice';
// STYLE
import TextField from '@mui/material/TextField';
// HOOKS
import { useDispatch } from 'react-redux';

const ElementFormTextfieldInput = ({ inputObject, value }) => {
  const { id, type } = inputObject;
  const dispatch = useDispatch();

  const changedHandler = (e) => {
    dispatch(onPropertyChanged({ [id]: e.target.value }));
  };

  const additionalTextfieldProps = {};

  if (type === 'number') {
    additionalTextfieldProps.type = 'number';
  }
  if (type === 'date') {
    additionalTextfieldProps.type = 'datetime-local';
  }

  return (
    <TextField value={value} onChange={changedHandler} {...additionalTextfieldProps} />
  );
};

export default ElementFormTextfieldInput;

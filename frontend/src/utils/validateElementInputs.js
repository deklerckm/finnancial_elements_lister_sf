import { ELEMENT_INPUTS } from 'components/ElementForm/ElementFormInputs/ElementFormInputs';

export const validateElementInputs = (state) => {
  for (let i = 0; i < ELEMENT_INPUTS.length; i++) {
    const { id, validation } = ELEMENT_INPUTS[i];
    const { required } = validation;

    if (required && !state[id]) {
      return false;
    }
  }

  return true;
};

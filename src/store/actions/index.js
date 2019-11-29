const CHANGE_VALUE = 'CHANGE_VALUE';
const SUBMIT_FORM = 'SUBMIT_FORM';

export const formSubmit = (payload) => ({
  type: CHANGE_VALUE,
  payload,
});

export const sendForm = (payload) => ({
  type: SUBMIT_FORM,
  payload,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const GET_SKILLS = 'CHANGE_VALUE';

export const formSubmit = (payload) => ({
  type: CHANGE_VALUE,
  payload,
});

export const getSkills = (payload) => ({
  type: GET_SKILLS,
  payload,
});

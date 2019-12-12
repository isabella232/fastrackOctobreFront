export const CHANGE_VALUE = 'CHANGE_VALUE';
export const GET_SKILLS = 'GET_SKILLS';
export const INIT_SKILLS = 'INIT_SKILLS';
export const SET_TECHNO = 'SET_TECHNO';

export const formSubmit = (payload) => ({
  type: CHANGE_VALUE,
  payload,
});

export const getSkills = (payload) => ({
  type: GET_SKILLS,
  payload,
});

export const initSkills = (payload) => ({
  type: INIT_SKILLS,
  payload,
});

export const setTechno = (payload) => ({
  type: SET_TECHNO,
  payload,
});

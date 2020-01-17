export const CHANGE_VALUE = 'CHANGE_VALUE';
export const GET_SKILLS = 'GET_SKILLS';
export const INIT_SKILLS = 'INIT_SKILLS';
export const SET_TECHNO = 'SET_TECHNO';
export const GET_PARTNER_DETAILS = 'GET_PARTNER_DETAILS';
export const SET_SKILL_VALUE = 'SET_SKILL_VALUE';
export const ADD_VALUE = 'ADD_VALUE';
export const ADD_LIST = 'ADD_LIST';
export const ADD_NEW_PARTNER = 'ADD_NEW_PARTNER';

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

export const getPartnerDetails = (payload) => ({
  type: GET_PARTNER_DETAILS,
  payload,
});

export const setTechno = (payload) => ({
  type: SET_TECHNO,
  payload,
});

export const setSkillValue = (payload) => ({
  type: SET_SKILL_VALUE,
  payload,
});

export const addValue = (payload) => ({
  type: ADD_VALUE,
  payload,
});

export const addList = (payload) => ({
  type: ADD_LIST,
  payload,
});

export const addNewPartner = (payload) => ({
  type: ADD_NEW_PARTNER,
  payload,
});

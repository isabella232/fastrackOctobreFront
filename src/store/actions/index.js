export const CHANGE_VALUE = 'CHANGE_VALUE';
export const GET_SKILLS = 'GET_SKILLS';
export const INIT_SKILLS = 'INIT_SKILLS';
export const SET_TECHNO = 'SET_TECHNO';
export const GET_PARTNER_DETAILS = 'GET_PARNER_DETAILS';
export const SET_SKILL_VALUE = 'SET_SKILL_VALUE';

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

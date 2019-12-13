import { INIT_SKILLS, GET_SKILLS, SET_TECHNO } from '../actions';

const initialState = {
  categoriesList: [],
  skillsList: {},
  currentTechno: 'Back',
};

const skillsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SKILLS:
      return { skills: action.payload };
    case INIT_SKILLS:
      return {
        ...state,
        categoriesList: action.payload.categories,
        skillsList: action.payload.skills,
      };
    case SET_TECHNO:
      return {
        ...state,
        currentTechno: action.payload,
      };
    default:
      return state;
  }
};

export default skillsReducer;

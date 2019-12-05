import { INIT_SKILLS, GET_SKILLS } from '../actions';

const initialState = {
  categoriesList: [],
  skillsList: {},
};

const skillsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SKILLS:
      return { skills: action.payload };
    case INIT_SKILLS:
      console.log(action.payload);
      return {
        ...state,
        categoriesList: action.payload.categories,
        skillsList: action.payload.skills,
      };
    default:
      return state;
  }
};

export default skillsReducer;

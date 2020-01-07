import {
  CHANGE_VALUE, GET_PARTNER_DETAILS, SET_SKILL_VALUE, ADD_VALUE, ADD_LIST,
} from '../actions';

const initialState = {
  list: [],
  currentPartner: {},
  partnerDetails: [],
};

const partnerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LIST:
      return {...state, list: action.payload };
    case CHANGE_VALUE:
      return { ...state, currentPartner: action.payload };
    case GET_PARTNER_DETAILS:
      return { ...state, partnerDetails: action.payload };
    case SET_SKILL_VALUE:
      return {
        ...state,
        partnerDetails: {
          ...state.partnerDetails,
          skills: state.partnerDetails.skills.map((skill) => ((skill.id === action.payload.id) ? action.payload : skill)),
        },
      };
    case ADD_VALUE:
      return {
        ...state,
        partnerDetails: {
          ...state.partnerDetails,
          skills: [...state.partnerDetails.skills, action.payload],
        },
      };
    default:
      return state;
  }
};

export default partnerReducer;

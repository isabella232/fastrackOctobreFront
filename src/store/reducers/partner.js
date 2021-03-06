import {
  CHANGE_VALUE, GET_PARTNER_DETAILS, SET_SKILL_VALUE, ADD_VALUE, ADD_LIST, ADD_NEW_PARTNER, CLEAR_STORE_LIST, CLEAR_PARTNER_STORE, CHANGE_FILTER,
} from '../actions';

const initialState = {
  list: [],
  currentPartner: {},
  partnerDetails: [],
  filterState: 0,
};

const partnerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LIST:
      return { ...state, list: action.payload };
    case CHANGE_VALUE:
      return { ...state, currentPartner: action.payload };
    case GET_PARTNER_DETAILS:
      return { ...state, partnerDetails: action.payload };
    case CLEAR_PARTNER_STORE:
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
    case ADD_NEW_PARTNER:
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filterState: action.payload,
      };
    case CLEAR_STORE_LIST:
      return {
        ...state, list: action.payload,
      };
    default:
      return state;
  }
};

export default partnerReducer;

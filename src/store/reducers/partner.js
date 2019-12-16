import { CHANGE_VALUE, GET_PARTNER_DETAILS, SET_SKILL_VALUE } from '../actions';

const initialState = {
  list: [],
  currentPartner: {},
  partnerDetails: [],
};

const partnerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { currentPartner: action.payload };
    case GET_PARTNER_DETAILS:
      return { ...state, partnerDetails: action.payload };
    case SET_SKILL_VALUE:
      return { ...state,
        partnerDetails: { 
          ...state.partnerDetails,
          skills: action.payload 
        }};
    default:
      return state;
  }
};

export default partnerReducer;

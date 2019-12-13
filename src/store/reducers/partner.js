import { CHANGE_VALUE, GET_PARTNER_DETAILS } from '../actions';

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
    default:
      return state;
  }
};

export default partnerReducer;

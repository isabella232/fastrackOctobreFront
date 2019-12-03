import CHANGE_VALUE from '../actions';

const initialState = {
  list: [],
  currentPartner: {},
};

const partnerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { currentPartner: action.payload };
    default:
      return state;
  }
};

export default partnerReducer;

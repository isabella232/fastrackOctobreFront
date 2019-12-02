const initialState = {
  list: [],
  currentPartner: {},
};

const CHANGE_VALUE = 'CHANGE_VALUE';

const partnerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { currentPartner: action.payload };
    default:
      return state;
  }
};

export default partnerReducer;

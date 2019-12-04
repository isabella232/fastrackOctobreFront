import { combineReducers } from 'redux';
import partnerReducer from './reducers/partner';
import skillsReducer from './reducers/skills';

export default combineReducers({
  partnerReducer,
  skillsReducer,
});

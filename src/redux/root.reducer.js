import { combineReducers } from 'redux';

import user from './user/user.reducer';
import alert from './alert/alert.reducer';

export default combineReducers({
  user,
  alert,
});

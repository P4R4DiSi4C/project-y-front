import { combineReducers } from 'redux';

import {LOGOUT} from './root.constants';
import user from './user/user.reducer';
import alert from './alert/alert.reducer';
import calendar from './calendar/calendar.reducer';
import appointment from './appointment/appointment.reducer';

const appReducer = combineReducers({
  user,
  alert,
  calendar,
  appointment
});

export default (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
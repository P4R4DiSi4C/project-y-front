import { combineReducers } from 'redux';

import user from './user/user.reducer';
import alert from './alert/alert.reducer';
import calendar from './calendar/calendar.reducer';
import appointment from './appointment/appointment.reducer';

export default combineReducers({
  user,
  alert,
  calendar,
  appointment
});

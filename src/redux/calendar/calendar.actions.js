import { ADD_CALENDAR } from './calendar.constants';
import { alertSuccess } from '../alert/alert.actions';
import * as calendarService from './calendar.service';

export const addCalendar = (name) => async (dispatch) => {
  const response = await calendarService.add(name);

  dispatch({
    type: ADD_CALENDAR,
    payload: { ...response, name },
  });
  dispatch(alertSuccess('Calendrier ajouté !'));
};

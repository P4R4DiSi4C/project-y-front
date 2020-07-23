import { GET_ALL_CALENDARS } from './calendar.constants';
import { alertSuccess } from '../alert/alert.actions';
import * as calendarService from './calendar.service';

export const addCalendar = (name) => async (dispatch) => {
  await calendarService.add(name);

  dispatch(getAllCalendars());

  dispatch(alertSuccess('Calendrier ajouté !'));
};

export const getAllCalendars = () => async (dispatch) => {
  const response = await calendarService.getAll();
  console.log(response.result);
  dispatch({
    type: GET_ALL_CALENDARS,
    payload: response.result,
  });
};

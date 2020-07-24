import { GET_ALL_CALENDARS } from './calendar.constants';
import { alertSuccess } from '../alert/alert.actions';
import calendarService from './calendar.service';

export const addCalendar = (name) => async (dispatch) => {
  await calendarService.add(name);

  dispatch(getAll());

  dispatch(alertSuccess('Calendrier ajouté !'));
};

export const getAll = () => async (dispatch) => {
  const response = await calendarService.getAll();

  dispatch({
    type: GET_ALL_CALENDARS,
    payload: response.result,
  });
};

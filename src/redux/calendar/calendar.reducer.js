import {
  CALENDAR_CLEAR,
  GET_ALL_CALENDARS,
} from './calendar.constants';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CALENDARS:
      return [...payload];
    case CALENDAR_CLEAR:
      return initialState;

    default:
      return state;
  }
};

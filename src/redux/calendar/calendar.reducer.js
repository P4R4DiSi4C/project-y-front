import { ADD_CALENDAR, CALENDAR_CLEAR } from './calendar.constants';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CALENDAR:
      return {
        ...state,
        [payload._id]: {
          ...state[payload._id],
          name: payload.name,
        },
      };

    case CALENDAR_CLEAR:
      return initialState;

    default:
      return state;
  }
};

import {
  GET_APPOINTMENTS, GET_ALL_APPOINTMENTS
} from './appointment.constants';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_APPOINTMENTS:
    case GET_ALL_APPOINTMENTS:
      return [...payload];

    default:
      return state;
  }
};

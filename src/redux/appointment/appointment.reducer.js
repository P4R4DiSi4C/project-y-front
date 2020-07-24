import {
  GET_APPOINTMENTS
} from './appointment.constants';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_APPOINTMENTS:
      return [...payload];

    default:
      return state;
  }
};

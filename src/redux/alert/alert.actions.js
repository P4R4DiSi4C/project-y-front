import { SUCCESS, ERROR, CLEAR } from './alert.constants';

export const alert_success = (message) => {
  return {
    type: SUCCESS,
    payload: {
      type: 'alert-success',
      message: message,
    },
  };
};

export const alert_error = (message) => {
  return {
    type: ERROR,
    payload: {
      type: 'alert-error',
      message: message,
    },
  };
};

export const alert_clear = () => {
  return {
    type: CLEAR,
    payload: {},
  };
};

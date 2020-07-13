import { toast } from 'react-toastify';
import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from './alert.constants';

export const alert_success = (message) => (dispatch) => {
  dispatch({
    type: ALERT_SUCCESS,
    payload: {
      type: ALERT_SUCCESS,
      message: message,
    },
  });

  toast.success(message, {
    onClose: () => dispatch(alert_clear()),
  });
};

export const alert_error = (message) => (dispatch) => {
  dispatch({
    type: ALERT_ERROR,
    payload: {
      type: ALERT_ERROR,
      message: message,
    },
  });

  toast.error(message, {
    onClose: () => dispatch(alert_clear()),
  });
};

export const alert_clear = () => (dispatch) => {
  dispatch({
    type: ALERT_CLEAR,
    payload: {},
  });
};

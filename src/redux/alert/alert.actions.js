import { toast } from 'react-toastify';
import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from './alert.constants';

export const alertSuccess = message => dispatch => {
  dispatch({
    type: ALERT_SUCCESS,
    payload: {
      type: ALERT_SUCCESS,
      message: message
    }
  });

  toast.success(message, {
    onClose: () => dispatch(alertClear())
  });
};

export const alertError = message => dispatch => {
  dispatch({
    type: ALERT_ERROR,
    payload: {
      type: ALERT_ERROR,
      message: message
    }
  });

  toast.error(message, {
    onClose: () => dispatch(alertClear())
  });
};

export const alertClear = () => dispatch => {
  dispatch({
    type: ALERT_CLEAR,
    payload: {}
  });
};

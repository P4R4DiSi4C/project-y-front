import * as userService from './user.service';
import { alert_success, alert_error } from '../alert/alert.actions';
import { LOGIN_REQUEST } from './user.constants';

export const signUp = (user) => (dispatch) => {
  userService.signUp(user).then(
    (response) => {
      dispatch(alert_success('Inscription réussie'));
    },
    (error) => {
      dispatch(alert_error(error));
    }
  );
};

export const signIn = (user) => (dispatch) => {
  userService.signIn(user).then(
    (response) => {
      console.log(response);
      dispatch({
        type: LOGIN_REQUEST,
        payload: { ...response },
      });
      dispatch(alert_success('Connexion réussie'));
    },
    (error) => {
      dispatch(alert_error(error));
    }
  );
};

export const signIn2 = (user) => async (dispatch) => {
  try {
    const data = await userService.signIn2(user);

    if (data.isError) {
      throw data.error;
    }

    dispatch({
      type: LOGIN_REQUEST,
      payload: { ...data },
    });
    dispatch(alert_success('Connexion réussie'));
  } catch (error) {
    dispatch(alert_error(error));
  }
};

import * as userService from './user.service';
import { alertSuccess } from '../alert/alert.actions';
import { LOGIN_REQUEST, USER_CLEAR, SET_USER_STATE } from './user.constants';
import { navigate } from 'raviger';

export const signUp = user => async dispatch => {
  await userService.signUp(user);

  dispatch(alertSuccess('Inscription réussie'));
};

export const signIn = user => async dispatch => {
  const response = await userService.signIn(user);

  dispatch({
    type: LOGIN_REQUEST,
    payload: response
  });
  dispatch(alertSuccess('Connexion réussie'));
  localStorage.setItem('user', JSON.stringify(response.token));
  navigate('/dashboard');
};

export const logOut = async dispatch => {
  localStorage.removeItem('user');

  dispatch({
    type: USER_CLEAR,
    payload: {}
  });

  navigate('/');
};

export const setUserState = user => async dispatch => {
  dispatch({
    type: SET_USER_STATE,
    payload: user
  });
};

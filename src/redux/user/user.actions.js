import userService from './user.service';
import { alertSuccess } from '../alert/alert.actions';
import { LOGIN_REQUEST, SET_USER_STATE } from './user.constants';
import { LOGOUT } from '../root.constants';
import { navigate } from 'raviger';
import { setAxiosUserToken } from '../../axios';

export const signUp = (user) => async (dispatch) => {
  await userService.signUp(user);

  dispatch(alertSuccess('Inscription réussie'));
};

export const signIn = (user) => async (dispatch) => {
  const response = await userService.signIn(user);

  dispatch({
    type: LOGIN_REQUEST,
    payload: response,
  });
  dispatch(alertSuccess('Connexion réussie'));

  setAxiosUserToken(response.token);
  localStorage.setItem('user', JSON.stringify(response));
  navigate('/dashboard');
};

export const logOut = () => async (dispatch) => {
  localStorage.removeItem('user');

  dispatch({
    type: LOGOUT,
  });

  navigate('/');
};

export const setUserState = (user) => async (dispatch) => {
  dispatch({
    type: SET_USER_STATE,
    payload: user,
  });
};

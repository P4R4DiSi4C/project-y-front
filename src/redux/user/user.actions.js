import * as userService from './user.service';
import { alert_success } from '../alert/alert.actions';
import { LOGIN_REQUEST } from './user.constants';

export const signUp = (user) => async (dispatch) => {
	await userService.signUp(user);

	dispatch(alert_success('Inscription réussie'));
};

export const signIn = (user) => async (dispatch) => {
	const response = await userService.signIn(user);

	dispatch({
		type: LOGIN_REQUEST,
		payload: response,
	});
	dispatch(alert_success('Connexion réussie'));
};

import { LOGIN_REQUEST, USER_CLEAR, SET_USER_STATE } from './user.constants';

const initialState = {
	email: '',
	firstName: '',
	lastName: '',
	token: '',
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_REQUEST:
			return { ...state, ...payload };

		case SET_USER_STATE:
			return { ...state, ...payload };

		case USER_CLEAR:
			return initialState;

		default:
			return state;
	}
};

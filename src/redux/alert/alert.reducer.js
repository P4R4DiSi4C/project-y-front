import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from './alert.constants';

const initialState = [];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ALERT_SUCCESS:
			return [...state, payload];
		case ALERT_ERROR:
			return [...state, payload];
		case ALERT_CLEAR:
			return initialState;
		default:
			return state;
	}
};

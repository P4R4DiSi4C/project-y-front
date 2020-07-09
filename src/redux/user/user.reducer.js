const initialState = {
	email: '',
	firstName: '',
	lastName: '',
	token: '',
};

export default (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case 'SIGN_IN':
			return { ...state, ...payload };

		default:
			return state;
	}
};

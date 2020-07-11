import { LOGIN_REQUEST } from './user.constants';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  token: '',
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, ...payload };

    default:
      return state;
  }
};

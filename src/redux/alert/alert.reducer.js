import { SUCCESS, ERROR, CLEAR } from './alert.constants';

const initialState = {
  type: '',
  message: '',
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SUCCESS:
      return { ...state, ...payload };
    case ERROR:
      return { ...state, ...payload };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

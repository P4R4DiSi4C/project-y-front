const USER_ROOT = '/user';
const USER_SIGNUP = '/signup';
const USER_SIGNIN = '/signin';

export default {
  signUp: (data) => {
    return {
      method: 'post',
      url: USER_ROOT + USER_SIGNUP,
      data
    };
  },
  signIn: (data) => {
    return {
      method: 'post',
      url: USER_ROOT + USER_SIGNIN,
      data
    };
  }
};
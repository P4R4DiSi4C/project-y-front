import instance from '../../axios';

export const signUp = async user => {
  const response = await instance.post('/user/signup', user);

  return response;
};

export const signIn = async user => {
  const response = await instance.post('/user/signin', user);

  return response;
};

import instance, { handleError, handleError2 } from '../../axios';

export const signUp = (user) => {
  const { email, password, firstName, lastName } = { ...user };
  return instance
    .post('/user/signup', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    })
    .then((response) => {
      return response.data;
    })
    .catch(handleError);
};

export const signIn = (user) => {
  const { email, password } = { ...user };
  return instance
    .post('/user/signin', {
      email: email,
      password: password,
    })
    .then((response) => {
      return response.data;
    })
    .catch(handleError);
};

export const signIn2 = async (user) => {
  try {
    const { email, password } = { ...user };

    const data = await instance.post('/user/signin', {
      email: email,
      password: password,
    });
    return { data, isError: false };
  } catch (error) {
    return handleError2(error);
  }
};

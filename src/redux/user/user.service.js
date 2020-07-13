import instance, { handleError } from '../../axios';

export const signUp = async (user) => {
	const { email, password, firstName, lastName } = { ...user };

	const response = await instance.post('/user/signup', {
		email,
		password,
		firstName,
		lastName,
	});

	return response;
};

export const signIn = async (user) => {
	const { email, password } = { ...user };

	const response = await instance.post('/user/signin', {
		email,
		password,
	});

	return response;
};

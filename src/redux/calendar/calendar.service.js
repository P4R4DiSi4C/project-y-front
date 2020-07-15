import instance from '../../axios';

export const add = async (name) => {
  const response = await instance.post('/calendar', {
    name,
  });

  return response;
};

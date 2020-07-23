import instance from '../../axios';

export const add = async (name) => {
  const response = await instance.post('/calendar', {
    name,
  });

  return response;
};

export const getAll = async () => {
  const response = await instance.get('/calendar?sort=name');

  return response;
};

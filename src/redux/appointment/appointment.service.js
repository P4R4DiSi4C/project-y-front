import instance from '../../axios';

export const add = async (appointment) => {
  const response = await instance.post('/appointment', appointment);

  return response;
};

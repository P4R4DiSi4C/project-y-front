const APPOINTMENT_ROOT = '/appointment';

export default {
  add: (data) => {
    return {
      method: 'post',
      url: APPOINTMENT_ROOT,
      data
    };
  },
  getByCalendar: (uuid) => {
    return {
      url: APPOINTMENT_ROOT,
      params: {
        calendar: uuid,
      }
    };
  },
  getAll: (params) => {
    return {
      url: APPOINTMENT_ROOT,
      params
    };
  }
};
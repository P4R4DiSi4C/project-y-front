const APPOINTMENT_ROOT = '/appointment';

export default {
  add: (data) => {
    return {
      method: 'post',
      url: APPOINTMENT_ROOT,
      data
    };
  },
  approval: (uuid, data) => {
    return {
      method: 'patch',
      url: APPOINTMENT_ROOT + '/' + uuid,
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
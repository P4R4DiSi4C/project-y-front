const CALENDAR_ROOT = '/calendar';

export default {
  add: (data) => {
    return {
      method: 'post',
      url: CALENDAR_ROOT,
      data
    };
  },
  getAll: () => {
    return {
      url: CALENDAR_ROOT,
      params: {
        sort: 'name',
      }
    };
  }
};
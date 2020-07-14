import axios from 'axios';
import store from '../redux/store';

import { alertError } from '../redux/alert/alert.actions';
import { logOut } from '../redux/user/user.actions';

const instance = axios.create({
  baseURL: 'http://localhost:8080'
});

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (401 === error.response.status) {
      store.dispatch(alertError('Votre session a expirée.'));
      store.dispatch(logOut());
    } else {
      store.dispatch(alertError(error.message || error.response.data));
      return Promise.reject(error);
    }
  }
);

export default instance;

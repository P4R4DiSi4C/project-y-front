import axios from 'axios';
import store from '../redux/store';

import { alertError } from '../redux/alert/alert.actions';
import { logOut } from '../redux/user/user.actions';

const instance = axios.create({
  baseURL: 'http://localhost:8080'
});

/*instance.interceptors.request.use(config => {
  // Do something before request is sent

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});*/

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        switch (error.response.data) {
          case 'ERROR_USER_NOT_FOUND':
            alertError('Compte introuvable !');
            break;

          case 'ERROR_INVALID_TOKEN_PERMISSION':
            alertError("Vous n'avez pas la permission !");
            break;

          default:
            alertError('Votre session a expirée.');
            store.dispatch(logOut());
            break;
        }
      }
    } else {
      alertError(error.message || error.response.data);
    }
    return Promise.reject(error);
  }
);

export const setAxiosUserToken = token => {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};

export default instance;

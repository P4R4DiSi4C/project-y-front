import axios from 'axios';
import store from '../redux/store';

import { alert_error } from '../redux/alert/alert.actions';

const instance = axios.create({
	baseURL: 'http://localhost:8080',
});

instance.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		store.dispatch(alert_error(error.message || error.response.data));
		return Promise.reject(error);
	}
);

export default instance;

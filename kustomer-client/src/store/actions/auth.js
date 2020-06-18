import { apiCall, setTokenHeader } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	}
}

export function setAuthToken(token) {
	setTokenHeader(token);
}

export function logout() {
	return dispatch => {
		localStorage.clear();
		setAuthToken(false);
		dispatch(setCurrentUser({}));
	}
}

export function authCustomer(type, userData) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			return apiCall('post', `/api/auth/customer/${type}`, userData)
				.then(({token, ...user}) => {
					localStorage.setItem('jwtoken', token);
					setAuthToken(token);
					dispatch(setCurrentUser(user));
					dispatch(removeError());
					resolve();
				})
				.catch(err => {
					dispatch(addError(err.message));
					reject();
				});
		});
	}
}

export function authProfessional(type, userData) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			return apiCall('post', `/api/auth/professional/${type}`, userData)
				.then(({token, ...user}) => {
					localStorage.setItem('jwtoken', token);
					setAuthToken(token);
					dispatch(setCurrentUser(user));
					dispatch(removeError());
					resolve();
				})
				.catch(err => {
					dispatch(addError(err.message));
					reject();
				});
		});
	}
}
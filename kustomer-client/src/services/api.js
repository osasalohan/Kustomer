import axios from 'axios';

export function setTokenHeader(token) {
	if(token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
}

export function apiCall(method, path, data, isFile) {
	return new Promise((resolve, reject) => {
		const axiosRequest = isFile ?
					axios[method](path, data, {headers: {'Content-Type': 'multipart/form-data'}}) :
					axios[method](path, data)
		return axiosRequest
			.then(res => {
				return resolve(res.data);
		})
		.catch(err => {
			return reject(err.response.data.error);
		});
	});
}
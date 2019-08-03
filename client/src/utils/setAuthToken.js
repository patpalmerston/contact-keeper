import axios from 'axios';

const setAuthToken = token => {
	if (token) {
		axios.defaults.headers.common['x-auth-token'] = token;
		// look up axios defaluts headers and common
	} else {
		delete axios.defaults.headers.common['x-auth-token'];
	}
};

export default setAuthToken;

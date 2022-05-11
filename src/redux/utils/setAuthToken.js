import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        // Apply to every token request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // Delete auth token
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;

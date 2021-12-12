import axios from 'axios';

const api = axios.create({
    baseURL: 'https://easy-iot-si.herokuapp.com/'
});

export default api;
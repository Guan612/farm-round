import axios from 'axios';

const http = axios.create({
    baseURL: 'http://192.168.2.170',
    timeout: 10000
})

export default http;
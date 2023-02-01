import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://games.showvlad.com/api/',
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

export default axiosInstance

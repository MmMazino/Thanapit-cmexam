import axios from 'axios'

axios.interceptors.request.use(async (config) => {
    console.log("Request http");
    return config;
});
axios.interceptors.response.use(async (config) => {
    console.log("Response http");
    return config;
});

export const httpClient = axios
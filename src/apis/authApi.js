import axiosClient from "./axiosClient";

const authApi = {
    signup: params => axiosClient.post('/auth/register', params),
    login: params => axiosClient.post('/auth/login', params),
    logout: () => axiosClient.post('/auth/logout'),
    verifyToken: () => axiosClient.get('/auth/me'),
    // getAll: () => axiosClient.get('/auth')
}

export default authApi;
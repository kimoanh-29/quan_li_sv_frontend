import axiosClient from './axiosClient'

const userApi = {
    create: (data) => axiosClient.post('/user',data ),
    getAll: () => axiosClient.get('/user'),
    getOne: (id) => axiosClient.get(`/user/${id}`),
    delete: (id) => axiosClient.delete(`/user/${id}`),
    update: (id, params) => axiosClient.patch(`user/${id}`, params),
}

export default userApi
import axiosClient from './axiosClient'

const semesterApi = {
    create: (data) => axiosClient.post('/semester',data ),
    getAll: () => axiosClient.get('/semester'),
    getOne: (id) => axiosClient.get(`/semester/${id}`),
    delete: (id) => axiosClient.delete(`/semester/${id}`),
    update: (id, params) => axiosClient.patch(`semester/${id}`, params),
}

export default semesterApi
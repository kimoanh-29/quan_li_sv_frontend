import axiosClient from './axiosClient'

const subjectApi = {
    create: (data) => axiosClient.post('/subject',data ),
    getAll: () => axiosClient.get('/subject'),
    getOne: (id) => axiosClient.get(`/subject/${id}`),
    delete: (id) => axiosClient.delete(`/subject/${id}`),
    update: (id, params) => axiosClient.patch(`subject/${id}`, params),
}

export default subjectApi
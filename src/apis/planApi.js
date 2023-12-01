import axiosClient from './axiosClient'

const planApi = {
    create: (data) => axiosClient.post('/plan',data ),
    getAll: (user_id) => axiosClient.get(`/plan/${user_id}`),
    getOne: (id) => axiosClient.get(`/plan/${id}`),
    delete: (id) => axiosClient.delete(`/plan/${id}`),
    update: (params) => axiosClient.patch(`plan/update`, params),
}

export default planApi
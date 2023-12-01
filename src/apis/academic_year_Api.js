import axiosClient from './axiosClient'

const academic_year_Api = {
    create: (data) => axiosClient.post('/academic_year',data ),
    getAll: () => axiosClient.get('/academic_year'),
    getOne: (id) => axiosClient.get(`/academic_year/${id}`),
    delete: (id) => axiosClient.delete(`/academic_year/${id}`),
    update: (id, params) => axiosClient.patch(`academic_year/${id}`, params),
}

export default academic_year_Api
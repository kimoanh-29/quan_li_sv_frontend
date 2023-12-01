import axios from 'axios';
// import queryString from 'query-string';

const baseURL = 'http://localhost:3001'
const getToken = () => localStorage.getItem('token');

const axiosClient = axios.create({
    baseURL
    // paramsSerializer: params => queryString({params})
})

axiosClient.interceptors.request.use( async config => {
    return {
        ...config,
        headers:{
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getToken()}`,
        }
    }
})

// axiosClient.interceptors.response.use( response => {
//     // if ( response ){
//     //     return response;
//     // }
//     // return response;
//     throw new Error(`Server Error - ${response.status}`);
// }, error => {
//     if (error.response && error.response.status === 400) {
//         console.log('Bad Request Error');
//     }
//     throw error;
// })

export default axiosClient;
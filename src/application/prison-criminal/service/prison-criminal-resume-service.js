import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminal-resumes/${id}`).then(response => {
            return response.data;
        });
    },
    getAll(id) {
        return axios.get(`api/criminal-resumes/all?criminalId=${id}`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/criminal-resumes`, { params: params }).then(response => {
            return response.data;
        });
    },
    add(criminalResume) {
        return axios.post('api/criminal-resumes', criminalResume);
    },
    update(criminalResume) {
        return axios.put(`api/criminal-resumes/${criminalResume.id}`, criminalResume);
    },
    delete(id) {
        return axios.delete(`api/criminal-resumes/${id}`);
    }
};

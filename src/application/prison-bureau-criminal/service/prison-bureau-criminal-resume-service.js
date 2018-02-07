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
    }
};

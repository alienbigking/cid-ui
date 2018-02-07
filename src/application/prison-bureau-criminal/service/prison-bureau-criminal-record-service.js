import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminal-records/${id}`).then(response => {
            return response.data;
        });
    },
    getAll(id) {
        return axios.get(`api/criminal-records/all?criminalId=${id}`).then(response => {
            return response.data;
        });
    }
};

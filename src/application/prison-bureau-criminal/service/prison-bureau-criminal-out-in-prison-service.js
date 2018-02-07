import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminal-out-in-prisons/${id}`).then(response => {
            return response.data;
        });
    },
    getAll(id) {
        return axios.get(`api/criminal-out-in-prisons/all?criminalId=${id}`).then(response => {
            return response.data;
        });
    }
};

import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminal-forfeits/${id}`).then(response => {
            return response.data;
        });
    },
    getAll(id) {
        return axios.get(`api/criminal-forfeits/all?criminalId=${id}`).then(response => {
            return response.data;
        });
    }
};

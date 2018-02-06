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
    },
    getPaged(params) {
        return axios.get(`api/criminal-out-in-prisons`, { params: params }).then(response => {
            return response.data;
        });
    },
    add(criminalOutInPrison) {
        return axios.post('api/criminal-out-in-prisons', criminalOutInPrison);
    },
    update(criminalOutInPrison) {
        return axios.put(`api/criminal-out-in-prisons/${criminalOutInPrison.id}`, criminalOutInPrison);
    },
    delete(id) {
        return axios.delete(`api/criminal-out-in-prisons/${id}`);
    }
};

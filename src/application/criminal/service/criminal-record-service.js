import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminal-records/${id}`).then(response => {
            return response.data;
        });
    },
    getAll() {
        return axios.get(`api/criminal-records/all`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/criminal-records`, { params: params }).then(response => {
            return response.data;
        });
    },
    add(criminalRecord) {
        return axios.post('api/criminal-records', criminalRecord);
    },
    update(criminalRecord) {
        return axios.put(`api/criminal-records/${criminalRecord.id}`, criminalRecord);
    },
    delete(id) {
        return axios.delete(`api/criminal-records/${id}`);
    }
};

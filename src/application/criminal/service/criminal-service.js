import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminals/${id}`).then(response => {
            return response.data;
        });
    },
    getAll() {
        return axios.get(`api/criminals/all`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/criminals`, { params: params }).then(response => {
            return response.data;
        });
    },
    add(criminal) {
        return axios.post('api/criminals', criminal);
    },
    update(criminal) {
        return axios.put(`api/criminals/${criminal.id}`, criminal);
    },
    delete(id) {
        return axios.delete(`api/criminals/${id}`);
    }
};

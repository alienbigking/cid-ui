import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/prison-departments/${id}`).then(response => {
            return response.data;
        });
    },
    getAll() {
        return axios.get(`api/prison-departments/all`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/prison-departments`, { params: params }).then(response => {
            return response.data;
        });
    },
    add(prisonDepartment) {
        return axios.post('api/prison-departments', prisonDepartment);
    },
    update(prisonDepartment) {
        return axios.put(`api/prison-departments/${prisonDepartment.id}`, prisonDepartment);
    },
    delete(id) {
        return axios.delete(`api/prison-departments/${id}`);
    }
};

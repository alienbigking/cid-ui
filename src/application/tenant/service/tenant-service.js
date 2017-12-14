import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/tenants/${id}`).then(response => {
            return response.data;
        });
    },
    getAll() {
        return axios.get(`api/tenants`).then(response => {
            return response.data;
        });
    },
    addPrisonTenant(tenant) {
        return axios.post('api/tenants/prison-tenants', tenant);
    },
    updatePrisonTenant(tenant) {
        return axios.put(`api/tenants/prison-tenants/${tenant.id}`, tenant);
    },
    delete(id) {
        return axios.delete(`api/tenants/${id}`);
    }
};

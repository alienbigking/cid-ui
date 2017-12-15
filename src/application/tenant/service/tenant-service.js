import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/tenants/${id}`).then(response => {
            return response.data;
        });
    },
    getAll(e) {
        return axios.get(`api/tenants`, { params: e }).then(response => {
            return response.data;
        });
    },
    addPrisonTenant(tenant) {
        return axios.post('api/tenants/prison-tenants', tenant);
    },
    updatePrisonTenant(tenant) {
        return axios.put(`api/tenants/prison-tenants/${tenant.id}`, tenant).then(res => {
            // console.log(res)
        }).catch(err => {
            console.log(err);
        });
    },
    delete(id) {
        return axios.delete(`api/tenants/${id}`);
    }
};

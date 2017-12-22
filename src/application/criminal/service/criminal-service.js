import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/tenants/${id}`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/tenants`, { params: params }).then(response => {
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
    },
    getGenders() {
      return axios.get(`api/genders`).then(res => res.data);
    },
    getEthnicities() {
      return axios.get(`api/ethnicities`).then(res => res.data);
    },
    getOccupations() {
      return axios.get(`api/occupations`).then(res => res.data);
    },
    getEducationDegrees() {
      return axios.get(`api/education-degrees`).then(res => res.data);
    },
    getPoliticalStatuses() {
      return axios.get(`api/political-statuses`).then(res => res.data);
    }
};

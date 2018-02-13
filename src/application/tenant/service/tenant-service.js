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
  update(tenant) {
    return axios.put(`api/tenants/${tenant.id}`, tenant);
  },
  delete(id) {
    return axios.delete(`api/tenants/${id}`);
  },
  enableTenant(id) {
    return axios.post(`api/tenants/${id}/enable`);
  },
  disableTenant(id) {
    return axios.post(`api/tenants/${id}/disable`);
  }
};

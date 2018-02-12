import axios from 'axios';

export default {
  get(id) {
    return axios.get(`api/roles/${id}`).then(response => {
      return response.data;
    });
  },
  getAll() {
    return axios.get(`api/roles/all`).then(response => {
      return response.data;
    });
  },
  getPaged(params) {
    return axios.get(`api/roles`, { params: params }).then(response => {
      return response.data;
    });
  },
  add(role) {
    return axios.post('api/roles', role);
  },
  update(role) {
    return axios.put(`api/roles/${role.id}`, role);
  },
  delete(id) {
    return axios.delete(`api/roles/${id}`);
  },
  getAllPermissions() {
    return axios.get('api/permissions').then(response => response.data);
  },
  getRolePermissions(roleId) {
    return axios.get(`api/roles/${roleId}/role-permissions`).then(response => response.data);
  },
  updateRolePermissions(roleId, permissions) {
    return axios.put(`api/roles/${roleId}/role-permissions`, permissions);
  },
  deleteRolePermissions(roleId) {
    return axios.delete(`api/roles/${roleId}/role-permissions`);
  }
};

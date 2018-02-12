import axios from 'axios';

export default {
  get(id) {
    return axios.get(`api/prison-bureau-departments/${id}`).then(response => {
      return response.data;
    });
  },
  getAll() {
    return axios.get(`api/prison-bureau-departments/all`).then(response => {
      return response.data;
    });
  },
  getPaged(params) {
    return axios.get(`api/prison-bureau-departments`, { params: params }).then(response => {
      return response.data;
    });
  },
  add(prisonHouse) {
    return axios.post('api/prison-bureau-departments', prisonHouse);
  },
  update(prisonHouse) {
    return axios.put(`api/prison-bureau-departments/${prisonHouse.id}`, prisonHouse);
  },
  delete(id) {
    return axios.delete(`api/prison-bureau-departments/${id}`);
  }
};

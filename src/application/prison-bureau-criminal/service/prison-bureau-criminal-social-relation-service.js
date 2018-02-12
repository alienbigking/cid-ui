import axios from 'axios';

export default {
  get(id) {
    return axios.get(`api/criminal-social-relations/${id}`).then(response => {
      return response.data;
    });
  },
  getAll(id) {
    return axios.get(`api/criminal-social-relations/all?criminalId=${id}`).then(response => {
      return response.data;
    });
  }
};

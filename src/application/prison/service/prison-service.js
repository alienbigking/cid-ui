import axios from 'axios';

export default {
  getAll() {
    return axios.get(`api/prisons/all`).then(response => response.data);
  }
};

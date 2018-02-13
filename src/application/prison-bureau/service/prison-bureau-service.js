import axios from 'axios';

export default {
  getAll() {
    return axios.get(`api/prison-bureaus/all`).then(response => response.data);
  }
};

import axios from 'axios';

export default {
  getAll() {
    return axios.get(`api/procuratorates/all`).then(response => response.data);
  }
};

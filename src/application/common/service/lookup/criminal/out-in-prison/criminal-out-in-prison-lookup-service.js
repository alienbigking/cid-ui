import axios from 'axios';

export default {
  getAllOutInPrisonReasons() {
    return axios.get('/api/out-in-prison-reasons').then(response => response.data);
  }
};

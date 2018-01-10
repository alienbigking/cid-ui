import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/logs/${id}`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/logs`, { params: params }).then(response => {
            return response.data;
        });
    },
    addLoginLog() {
      return axios.post('api/logs/login');
    }
};

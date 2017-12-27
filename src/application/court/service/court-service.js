import axios from 'axios';

export default {
    getAll() {
        return axios.get(`api/courts/all`).then(response => response.data);
    }
};

import axios from 'axios';

export default {
    getAll() {
        return axios.get(`api/police-stations/all`).then(response => response.data);
    }
};

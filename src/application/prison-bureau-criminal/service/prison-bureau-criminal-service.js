import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminals/${id}`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/criminals`, { params: params }).then(response => {
            return response.data;
        });
    }
};

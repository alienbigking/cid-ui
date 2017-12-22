import axios from 'axios';

export default {
    getAllSomatotypes() {
        return axios.get(`api/somatotypes`).then(response => response.data);
    },
    getAllFaceTypes() {
        return axios.get(`api/face-types`).then(response => response.data);
    },
    getAllBloodTypes() {
        return axios.get(`api/blood-types`).then(response => response.data);
    },
    getAllAccents() {
        return axios.get(`api/accents`).then(response => response.data);
    }
};

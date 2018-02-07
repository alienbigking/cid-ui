import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminal-physical-characteristics?criminalId=${id}`).then(response => {
            return response.data;
        });
    }
};

import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/prison-houses/${id}`).then(response => {
            return response.data;
        });
    },
    getAll(e = { name: "house" }) {
        return axios.get(`api/prison-houses`, { params: e }).then(response => {
            return response.data;
        });
    },
    add(prisonHouse) {
        return axios.post('api/prison-houses', prisonHouse);
    },
    update(prisonHouse) {
        return axios.put(`api/prison-houses/${prisonHouse.id}`, prisonHouse);
    },
    delete(id) {
        return axios.delete(`api/prison-houses/${id}`);
    }
};

import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminal-forfeits/${id}`).then(response => {
            return response.data;
        });
    },
    getAll(id) {
        return axios.get(`api/criminal-forfeits/all?criminalId=${id}`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/criminal-forfeits`, { params: params }).then(response => {
            return response.data;
        });
    },
    add(criminalForfeit) {
        return axios.post('api/criminal-forfeits', criminalForfeit);
    },
    update(criminalForfeit) {
        return axios.put(`api/criminal-forfeits/${criminalForfeit.id}`, criminalForfeit);
    },
    delete(id) {
        return axios.delete(`api/criminal-forfeits/${id}`);
    }
};

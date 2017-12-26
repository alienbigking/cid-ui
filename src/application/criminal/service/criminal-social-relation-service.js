import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminal-social-relations/${id}`).then(response => {
            return response.data;
        });
    },
    getAll(id) {
        return axios.get(`api/criminal-social-relations/all?criminalId=${id}`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/criminal-social-relations`, { params: params }).then(response => {
            return response.data;
        });
    },
    add(criminalSocialRelation) {
        return axios.post('api/criminal-social-relations', criminalSocialRelation);
    },
    update(criminalSocialRelation) {
        return axios.put(`api/criminal-social-relations/${criminalSocialRelation.id}`, criminalSocialRelation);
    },
    delete(id) {
        return axios.delete(`api/criminal-social-relations/${id}`);
    }
};

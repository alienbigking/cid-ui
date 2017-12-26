import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/criminal-physical-characteristics/${id}`).then(response => {
            return response.data;
        });
    },
    getAll(id) {
        return axios.get(`api/criminal-physical-characteristics/all?criminalId=${id}`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/criminal-physical-characteristics`, { params: params }).then(response => {
            return response.data;
        });
    },
    add(criminalPhysicalCharacteristic) {
        return axios.post('api/criminal-physical-characteristics', criminalPhysicalCharacteristic);
    },
    update(criminalPhysicalCharacteristic) {
        return axios.put(`api/criminal-physical-characteristics/${criminalPhysicalCharacteristic.id}`, criminalPhysicalCharacteristic);
    },
    delete(id) {
        return axios.delete(`api/criminal-physical-characteristics/${id}`);
    }
};

import axios from 'axios';

export default {
    // 面部采集
    get(id) {
        return axios.get(`api/criminal-faces?criminalId=${id}`).then(response => {
            return response.data;
        });
    },
    add(criminalFace) {
        return axios.post('api/criminal-faces', criminalFace);
    },
    update(criminalFace) {
        return axios.put(`api/criminal-faces/${criminalFace.id}`, criminalFace);
    },
    // 瞳孔采集
    getIrises(id) {
        return axios.get(`api/criminal-irises?criminalId=${id}`).then(response => {
            return response.data;
        });
    },
    addIrises(criminalIris) {
        return axios.post('api/criminal-irises', criminalIris);
    },
    updateIrises(criminalIris) {
        return axios.put(`api/criminal-irises/${criminalIris.id}`, criminalIris);
    },
    // 指纹采集
    getFingerPrint(id) {
        return axios.get(`api/criminal-fingerprints?criminalId=${id}`).then(response => {
            return response.data;
        });
    },
    addFingerPrint(criminalFingerPrint) {
        return axios.post('api/criminal-fingerprints', criminalFingerPrint);
    },
    updateFingerPrint(criminalFingerPrint) {
        return axios.put(`api/criminal-fingerprints/${criminalFingerPrint.id}`, criminalFingerPrint);
    }
};

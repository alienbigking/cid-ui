import axios from 'axios';

export default {
    // 面部采集
    get(id) {
        return axios.get(`api/criminal-faces/${id}`).then(response => {
            return response.data;
        });
    },
    add(criminalFaces) {
        console.log(687678, criminalFaces);
        return axios.post('api/criminal-faces', criminalFaces);
    },
    update(criminalFaces) {
        return axios.put(`api/criminal-faces/${criminalFaces.id}`, criminalFaces);
    }
    // 瞳孔采集
};

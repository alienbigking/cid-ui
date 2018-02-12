import axios from 'axios';

export default {
  get(id) {
    return axios.get(`api/criminal-physical-characteristics?criminalId=${id}`).then(response => {
      return response.data;
    });
  },
  add(criminalPhysicalCharacteristic) {
    return axios.post('api/criminal-physical-characteristics', criminalPhysicalCharacteristic);
  },
  update(criminalPhysicalCharacteristic) {
    return axios.put(`api/criminal-physical-characteristics/${criminalPhysicalCharacteristic.id}`, criminalPhysicalCharacteristic);
  }
};

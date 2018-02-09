import axios from 'axios';
import accentStorage from './accent-storage';
import bloodTypeStorage from './blood-type-storage';
import faceTypeStorage from './face-type-storage';
import somatoTypeStorage from './somato-type-storage';

export default {
  getAllSomatotypes() {
    let somatoTypes = somatoTypeStorage.getSomatoTypes();
    if (somatoTypes) {
      return Promise.resolve(somatoTypes);
    }
    return axios.get('api/somatotypes').then(response => {
      somatoTypes = response.data;
      somatoTypeStorage.setSomatoTypes(somatoTypes);
      return somatoTypes;
    });
  },
  getAllFaceTypes() {
    let faceTypes = faceTypeStorage.getFaceTypes();
    if (faceTypes) {
      return Promise.resolve(faceTypes);
    }
    return axios.get('api/face-types').then(response => {
      faceTypes = response.data;
      faceTypeStorage.setFaceTypes(faceTypes);
      return faceTypes;
    });
  },
  getAllBloodTypes() {
    let bloodTypes = bloodTypeStorage.getBloodTypes();
    if (bloodTypes) {
      return Promise.resolve(bloodTypes);
    }
    return axios.get('api/blood-types').then(response => {
      bloodTypes = response.data;
      bloodTypeStorage.setBloodTypes(bloodTypes);
      return bloodTypes;
    });
  },
  getAllAccents() {
    let accents = accentStorage.getAccents();
    if (accents) {
      return Promise.resolve(accents);
    }
    return axios.get('api/accents').then(response => {
      accents = response.data;
      accentStorage.setAccents(accents);
      return accents;
    });
  }
};

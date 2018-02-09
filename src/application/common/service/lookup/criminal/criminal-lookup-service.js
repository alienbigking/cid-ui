import axios from 'axios';
import commutationScaleStorage from './commutation-scale-storage';
import educationDegreeStorage from './education-degree-storage';
import ethnicityStorage from './ethnicity-storage';
import fledTypeStorage from './fled-type-storage';
import genderStorage from './gender-storage';
import householdRegisterTypeStorage from './household-register-type-storage';
import politicalStatusStorage from './political-status-storage';
import separateCustodyTypeStorage from './separate-custody-type-storage';
import separateManagementLevelStorage from './separate-management-level-storage';

export default {
  getAllGenders() {
    let genders = genderStorage.getGenders();
    if (genders) {
      return Promise.resolve(genders);
    }
    return axios.get(`api/genders`).then(response => {
      genders = response.data;
      genderStorage.setGenders(genders);
      return genders;
    });
  },
  getAllEthnicities() {
    let ethnicities = ethnicityStorage.getEthnicities();
    if (ethnicities) {
      return Promise.resolve(ethnicities);
    }
    return axios.get(`api/ethnicities`).then(response => {
      ethnicities = response.data;
      ethnicityStorage.setEthnicities(ethnicities);
      return ethnicities;
    });
  },
  getAllHouseholdRegisterTypes() {
    let householdRegisterTypes = householdRegisterTypeStorage.getHouseholdRegisterTypes();
    if (householdRegisterTypes) {
      return Promise.resolve(householdRegisterTypes);
    }
    return axios.get(`api/household-register-types`).then(response => {
      householdRegisterTypes = response.data;
      householdRegisterTypeStorage.setHouseholdRegisterTypes(householdRegisterTypes);
      return householdRegisterTypes;
    });
  },
  getAllPoliticalStatuses() {
    let politicalStatuses = politicalStatusStorage.getPoliticalStatus();
    if (politicalStatuses) {
      return Promise.resolve(politicalStatuses);
    }
    return axios.get(`api/political-statuses`).then(response => {
      politicalStatuses = response.data;
      politicalStatusStorage.setPoliticalStatus(politicalStatuses);
      return politicalStatuses;
    });
  },
  getAllEducationDegrees() {
    let educationDegrees = educationDegreeStorage.getEducationDegree();
    if (educationDegrees) {
      return Promise.resolve(educationDegrees);
    }
    return axios.get(`api/education-degrees`).then(response => {
      educationDegrees = response.data;
      educationDegreeStorage.setEducationDegree(educationDegrees);
      return educationDegrees;
    });
  },
  getAllFledTypes() {
    let fledTypes = fledTypeStorage.getFledTypes();
    if (fledTypes) {
      return Promise.resolve(fledTypes);
    }
    return axios.get(`api/fled-types`).then(response => {
      fledTypes = response.data;
      fledTypeStorage.setFledTypes(fledTypes);
      return fledTypes;
    });
  },
  getAllSeparateManagementLevels() {
    let separateManagementLevels = separateManagementLevelStorage.getSeparateManagementLevel();
    if (separateManagementLevels) {
      return Promise.resolve(separateManagementLevels);
    }
    return axios.get(`api/separate-management-levels`).then(response => {
      separateManagementLevels = response.data;
      separateManagementLevelStorage.setSeparateManagementLevel(separateManagementLevels);
      return separateManagementLevels;
    });
  },
  getAllSeparateCustodyTypes() {
    let separateCustodyTypes = separateCustodyTypeStorage.getSeparateCustodyTypes();
    if (separateCustodyTypes) {
      return Promise.resolve(separateCustodyTypes);
    }
    return axios.get(`api/separate-custody-types`).then(response => {
      separateCustodyTypes = response.data;
      separateCustodyTypeStorage.setSeparateCustodyTypes(separateCustodyTypes);
      return separateCustodyTypes;
    });
  },
  getAllCommutationScales() {
    let commutationScales = commutationScaleStorage.getCommutationScale();
    if (commutationScales) {
      return Promise.resolve(commutationScales);
    }
    return axios.get(`api/commutation-scales`).then(response => {
      commutationScales = response.data;
      commutationScaleStorage.setCommutationScale(commutationScales);
      return commutationScales;
    });
  }
};

import axios from 'axios';

export default {
    getAllGenders() {
        return axios.get(`api/genders`).then(response => response.data);
    },
    getAllEthnicities() {
        return axios.get(`api/ethnicities`).then(response => response.data);
    },
    getAllNationalities() {
        return axios.get(`api/nationalities`).then(response => response.data);
    },
    getAllHouseholdRegisterTypes() {
        return axios.get(`api/household-register-types`).then(response => response.data);
    },
    getAllPoliticalStatuses() {
        return axios.get(`api/political-statuses`).then(response => response.data);
    },
    getAllEducationDegrees() {
        return axios.get(`api/education-degrees`).then(response => response.data);
    },
    getAllFledTypes() {
        return axios.get(`api/fled-types`).then(response => response.data);
    },
    getAllSeparateManagementLevels() {
        return axios.get(`api/separate-management-levels`).then(response => response.data);
    },
    getAllSeparateCustodyTypes() {
        return axios.get(`api/separate-custody-types`).then(response => response.data);
    },
    getAllCommutationScales() {
        return axios.get(`api/commutation-scales`).then(response => response.data);
    }
};

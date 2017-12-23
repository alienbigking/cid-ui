import axios from 'axios';

export default {
    getAllCountries() {
        return axios.get(`api/countries`).then(response => {
            return response.data;
        });
    },
    getAllProvinces(countryCode) {
        return axios.get(`api/provinces/${countryCode}`).then(response => {
            return response.data;
        });
    },
    getAllCities(provinceCode) {
        return axios.get(`api/cities/${provinceCode}`).then(response => {
            return response.data;
        });
    },
    getAllCounties(cityCode) {
        return axios.get(`api/counties/${cityCode}`).then(response => {
            return response.data;
        });
    }
};

import axios from 'axios';

export default {
  getAllCountries() {
    return axios.get(`api/countries`).then(response => {
      return response.data;
    });
  },
  getAllProvinces(countryCode) {
    const params = { countryCode: countryCode };
    return axios.get(`api/provinces`, { params: params }).then(response => {
      return response.data;
    });
  },
  getAllCities(provinceCode) {
    const params = { provinceCode: provinceCode };
    return axios.get(`api/cities`, { params: params }).then(response => {
      return response.data;
    });
  },
  getAllCounties(cityCode) {
    const params = { cityCode: cityCode };
    return axios.get(`api/counties`, { params: params }).then(response => {
      return response.data;
    });
  }
};

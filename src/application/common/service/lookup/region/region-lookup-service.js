import axios from 'axios';
import countryStorage from './country-storage';
import provinceStorage from './province-storage';
import cityStorage from './city-storage';
import countyStorage from './county-storage';

export default {
  getAllCountries() {
    let allCountries = countryStorage.getAllCountries();
    if (allCountries) {
      return Promise.resolve(allCountries);
    }
    return axios.get(`api/countries`).then(response => {
      allCountries = response.data;
      countryStorage.setAllCountries(allCountries);
      return allCountries;
    });
  },
  getAllProvinces(countryCode) {
    let provinces = provinceStorage.getProvinces(countryCode);
    if (provinces) {
      return Promise.resolve(provinces);
    }
    const params = { countryCode: countryCode };
    return axios.get(`api/provinces`, { params: params }).then(response => {
      provinces = response.data;
      provinceStorage.setProvinces(countryCode, provinces);
      return provinces;
    });
  },
  getAllCities(provinceCode) {
    let cities = cityStorage.getCities(provinceCode);
    if (cities) {
      return Promise.resolve(cities);
    }
    const params = { provinceCode: provinceCode };
    return axios.get(`api/cities`, { params: params }).then(response => {
      cities = response.data;
      cityStorage.setCities(provinceCode, cities);
      return cities;
    });
  },
  getAllCounties(cityCode) {
    let counties = countyStorage.getCounties(cityCode);
    if (counties) {
      return Promise.resolve(counties);
    }
    const params = { cityCode: cityCode };
    return axios.get(`api/counties`, { params: params }).then(response => {
      counties = response.data;
      countyStorage.setCounties(cityCode, counties);
      return counties;
    });
  }
};

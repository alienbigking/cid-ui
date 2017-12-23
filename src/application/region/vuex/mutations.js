import * as types from './mutation-types';

export default {
    [types.SET_ALL_COUNTRIES](state, allCountries) {
        state.allCountries = allCountries;
    },
    [types.SET_ALL_PROVINCES](state, allProvinces) {
        state.allProvinces = allProvinces;
    },
    [types.SET_ALL_CITIES](state, allCities) {
        state.allCities = allCities;
    },
    [types.SET_ALL_COUNTIES](state, allCounties) {
        state.allCounties = allCounties;
    }
};

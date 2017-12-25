import * as types from './mutation-types';
import {default as regionLookupService} from '../service/region-lookup-service';

export default {
    getAllCountries({commit, state}) {
        return regionLookupService.getAllCountries().then(allCountries => {
            commit(types.SET_ALL_COUNTRIES, allCountries);
        });
    },
    getAllProvinces({commit, state}, countryCode) {
        return regionLookupService.getAllProvinces(countryCode).then(allProvinces => {
            commit(types.SET_ALL_PROVINCES, allProvinces);
        });
    },
    getAllCities({commit, state}, provinceCode) {
        return regionLookupService.getAllCities(provinceCode).then(allCities => {
            commit(types.SET_ALL_CITIES, allCities);
        });
    },
    getAllCounties({commit, state}, cityCode) {
        return regionLookupService.getAllCounties(cityCode).then(allCounties => {
            commit(types.SET_ALL_COUNTIES, allCounties);
        });
    }
};

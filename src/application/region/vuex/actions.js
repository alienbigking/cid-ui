import * as types from './mutation-types';
import {default as regionLookupService} from '../service/region-lookup-service';

export default {
    getAllCountries({commit, state}, params) {
        return regionLookupService.getAllCountries(params).then(allCountries => {
            commit(types.SET_ALL_COUNTRIES, allCountries);
        });
    },
    getAllProvinces({commit, state}, params) {
        return regionLookupService.getAllProvinces(params).then(allProvinces => {
            commit(types.SET_ALL_PROVINCES, allProvinces);
        });
    },
    getAllCities({commit, state}, params) {
        return regionLookupService.getAllCities(params).then(allCities => {
            commit(types.SET_ALL_CITIES, allCities);
        });
    },
    getAllCounties({commit, state}, params) {
        return regionLookupService.getAllCounties(params).then(allCounties => {
            commit(types.SET_ALL_COUNTIES, allCounties);
        });
    }
};

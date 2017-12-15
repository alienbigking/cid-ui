import * as types from './mutation-types';
import { default as prisonHouseService } from '../service/prison-house-service';

export default {
    getPrisonHouse({ commit, state }, id) {
        return prisonHouseService.get(id).then(prisonHouse => {
            commit(types.SET_PRISON_HOUSE, { prisonHouse: prisonHouse });
        });
    },
    getAllPrisonHouses({ commit, state }, params) {
        return prisonHouseService.getAll(params).then(prisonHouses => {
            commit(types.SET_PRISON_HOUSES, prisonHouses);
        });
    },
    addPrisonHouse({ commit, state }, prisonHouse) {
        return prisonHouseService.add(prisonHouse);
    },
    updatePrisonHouse({ commit, state }, prisonHouse) {
        return prisonHouseService.update(prisonHouse);
    },
    deletePrisonHouse({ commit }, id) {
        return prisonHouseService.delete(id);
    }
};

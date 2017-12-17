import * as types from './mutation-types';
import { default as prisonHouseService } from '../service/prison-house-service';

export default {
    getPrisonHouse({ commit, state }, id) {
        return prisonHouseService.get(id).then(prisonHouse => {
            commit(types.SET_PRISON_HOUSE, prisonHouse);
        });
    },
    getPagedPrisonHouses({ commit, state }, params) {
        return prisonHouseService.getPaged(params).then(pagedPrisonHouses => {
            commit(types.SET_PAGED_PRISON_HOUSES, pagedPrisonHouses);
        });
    },
    addPrisonHouse({ commit, state }) {
        return prisonHouseService.add(state.prisonHouse);
    },
    updatePrisonHouse({ commit, state }) {
        return prisonHouseService.update(state.prisonHouse);
    },
    deletePrisonHouse({ commit }, id) {
        return prisonHouseService.delete(id);
    }
};

import * as types from './mutation-types';
import { default as prisonHouseService } from '../service/prison-house-service';

export default {
    getPrisonHouse({ commit, state }) {
        return prisonHouseService.get().then(prisonHouse => {
            commit(types.SET_PRISON_HOUSE, { prisonHouse: prisonHouse });
        });
    },
    getAllPrisonHouses({ commit, state }) {
        return prisonHouseService.getAll().then(prisonHouses => {
            commit(types.SET_PRISON_HOUSES, { prisonHouses: prisonHouses });
        });
    },
    addPrisonHouse({ commit, state }, prisonHouse) {
        return prisonHouseService.add(prisonHouse);
    },
    updatePrisonHouse({ commit, state }) {
        return prisonHouseService.update(state.prisonHouse);
    },
    deletePrisonHouse({ commit }, id) {
        return prisonHouseService.delete(id);
    }
};

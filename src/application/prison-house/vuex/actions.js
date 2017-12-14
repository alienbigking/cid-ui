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
    addPrisonHouse({ commit, state }) {
        return prisonHouseService.addPrisonTenant(state.prisonHouse);
    },
    updatePrisonHouse({ commit, state }) {
        return prisonHouseService.updatePrisonTenant(state.prisonHouse);
    },
    deletePrisonHouse({ commit }, id) {
        return prisonHouseService.delete(id);
    }
};

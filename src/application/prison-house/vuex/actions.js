import * as types from './mutation-types';
import { default as prisonHouseService } from '../service/prison-house-service';

export default {
    get({ commit, state }) {
        return prisonHouseService.get().then(prisonHouse => {
            commit(types.SET_PRISON_HOUSE, { prisonHouse: prisonHouse });
        });
    },
    getAll({ commit, state }) {
        return prisonHouseService.getAll().then(prisonHouses => {
            commit(types.SET_PRISON_HOUSES, { prisonHouses: prisonHouses });
        });
    },
    add({ commit, state }) {
        return prisonHouseService.addPrisonTenant(state.prisonHouse);
    },
    update({ commit, state }) {
        return prisonHouseService.updatePrisonTenant(state.prisonHouse);
    },
    delete({ commit }, id) {
        return prisonHouseService.delete(id);
    }
};

import * as types from './mutation-types';
import { default as prisonAreaService } from '../service/prison-area-service';

export default {
    getPrisonArea({ commit, state }) {
        return prisonAreaService.get().then(prisonArea => {
            commit(types.SET_PRISON_AREA, { prisonArea: prisonArea });
        });
    },
    getAllPrisonAreas({ commit, state }) {
        return prisonAreaService.getAll().then(prisonAreas => {
            commit(types.SET_PRISON_AREAS, prisonAreas);
        });
    },
    addPrisonArea({ commit, state }, prisonArea) {
        return prisonAreaService.add(prisonArea);
    },
    updatePrisonArea({ commit, state }) {
        return prisonAreaService.updatePrisonTenant(state.prisonArea);
    },
    deletePrisonArea({ commit }, id) {
        return prisonAreaService.delete(id);
    }
};

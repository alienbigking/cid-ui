import * as types from './mutation-types';
import { default as prisonAreaService } from '../service/prison-area-service';

export default {
    getPrisonArea({ commit, state }, params) {
        return prisonAreaService.get(params).then(prisonArea => {
            commit(types.SET_PRISON_AREA, { prisonArea: prisonArea });
        });
    },
    getAllPrisonAreas({ commit, state }, params) {
        return prisonAreaService.getAll(params).then(prisonAreas => {
            commit(types.SET_PRISON_AREAS, prisonAreas);
        });
    },
    getAllPrisonAreasByJail({ commit, state }, params) {
        let jailId = params.jailId;
        delete params.jailId;
        return prisonAreaService.getByJail(jailId, params).then(prisonAreas => {
            commit(types.SET_PRISON_AREAS_JAILID, prisonAreas);
        });
    },
    addPrisonArea({ commit, state }, prisonArea) {
        return prisonAreaService.add(prisonArea);
    },
    updatePrisonArea({ commit, state }, prisonArea) {
        return prisonAreaService.update(prisonArea);
    },
    deletePrisonArea({ commit }, id) {
        return prisonAreaService.delete(id);
    }
};

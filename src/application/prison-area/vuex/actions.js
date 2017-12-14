import * as types from './mutation-types';
import { default as prisonAreaService } from '../service/prison-area-service';

export default {
    get({ commit, state }) {
        return prisonAreaService.get().then(prisonArea => {
            commit(types.SET_PRISON_AREA, { prisonArea: prisonArea });
        });
    },
    getAll({ commit, state }) {
        return prisonAreaService.getAll().then(prisonAreas => {
            commit(types.SET_PRISON_AREAS, { prisonAreas: prisonAreas });
        });
    },
    add({ commit, state }) {
        return prisonAreaService.addPrisonTenant(state.prisonArea);
    },
    update({ commit, state }) {
        return prisonAreaService.updatePrisonTenant(state.prisonArea);
    },
    delete({ commit }, id) {
        return prisonAreaService.delete(id);
    }
};

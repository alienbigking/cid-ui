import * as types from './mutation-types';

export default {
    [types.SET_PRISON_HOUSE](state, prisonHouse) {
        state.prisonHouse = prisonHouse;
    },
    [types.UPDATE_PRISON_HOUSE](state, prisonHouse) {
        Object.assign(state.prisonHouse, prisonHouse);
    },
    [types.SET_PAGED_PRISON_HOUSES](state, pagedPrisonHouses) {
        state.pagedPrisonHouses = pagedPrisonHouses;
    },
    [types.UPDATE_PAGED_PRISON_HOUSES](state, pagedPrisonHouses) {
        Object.assign(state.pagedPrisonHouses, pagedPrisonHouses);
    }
};

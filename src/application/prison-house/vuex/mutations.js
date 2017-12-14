import * as types from './mutation-types';

export default {
    [types.SET_PRISON_HOUSE](state, { prisonHouse }) {
        state.prisonHouse = prisonHouse;
    },
    [types.SET_PRISON_HOUSES](state, prisonHouses) {
        state.prisonHouses = prisonHouses;
    },
    [types.UPDATE__PRISON_HOUSE](state, prisonHouse) {
        Object.assign(state.prisonHouses, prisonHouse);
    }
};

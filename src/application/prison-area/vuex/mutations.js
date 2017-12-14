import * as types from './mutation-types';

export default {
    [types.SET_PRISON_AREA](state, { prisonArea }) {
        state.prisonArea = prisonArea;
    },
    [types.SET_PRISON_AREAS](state, prisonAreas) {
        console.log(prisonAreas);
        state.prisonAreas = prisonAreas;
    }
};

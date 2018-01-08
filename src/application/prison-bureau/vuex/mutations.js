import * as types from './mutation-types';

export default {
  [types.SET_PRISON_BUREAU](state, prisonBureau) {
      state.prisonBureau = prisonBureau;
  },
  [types.UPDATE_PRISON_BUREAU](state, prisonBureau) {
      Object.assign(state.prisonBureau, prisonBureau);
  },
  [types.SET_ALL_PRISON_BUREAUS](state, allPrisonBureaus) {
      state.allPrisonBureaus = allPrisonBureaus;
  },
  [types.SET_PAGED_PRISON_BUREAUS](state, pagedPrisonBureaus) {
      state.pagedPrisonBureaus = pagedPrisonBureaus;
  }
};

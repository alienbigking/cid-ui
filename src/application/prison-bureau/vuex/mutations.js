import * as types from './mutation-types';
import _ from "lodash";

export default {
  [types.SET_PRISON_BUREAU](state, prisonBureau) {
      state.prisonBureau = prisonBureau;
  },
  [types.UPDATE_PRISON_BUREAU](state, prisonBureau) {
      state.prisonBureau = _.cloneDeep(prisonBureau);
  },
  [types.SET_ALL_PRISON_BUREAUS](state, allPrisonBureaus) {
      state.allPrisonBureaus = allPrisonBureaus;
  },
  [types.SET_PAGED_PRISON_BUREAUS](state, pagedPrisonBureaus) {
      state.pagedPrisonBureaus = pagedPrisonBureaus;
  }
};

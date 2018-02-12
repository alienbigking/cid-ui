import * as types from './mutation-types';

export default {
  [types.SET_ALL_PRISON_BUREAUS](state, allPrisonBureaus) {
    state.allPrisonBureaus = allPrisonBureaus;
  }
};

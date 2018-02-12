import * as types from './mutation-types';

export default {
  [types.SET_ALL_PRISONS](state, allPrisons) {
    state.allPrisons = allPrisons;
  }
};

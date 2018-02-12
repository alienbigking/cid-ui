import * as types from './mutation-types';

export default {
  [types.SET_ALL_PROCURATORATE](state, allProcuratorates) {
    state.allProcuratorates = allProcuratorates;
  }
};

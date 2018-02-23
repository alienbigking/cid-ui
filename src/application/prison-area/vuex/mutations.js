import * as types from './mutation-types';
import _ from 'lodash';

export default {
  [types.SET_PRISON_AREA](state, prisonArea) {
    state.prisonArea = prisonArea;
  },
  [types.UPDATE_PRISON_AREA](state, prisonArea) {
    state.prisonArea = _.cloneDeep(prisonArea);
  },
  [types.SET_ALL_PRISON_AREAS](state, allPrisonAreas) {
    state.allPrisonAreas = allPrisonAreas;
  },
  [types.SET_PAGED_PRISON_AREAS](state, pagedPrisonAreas) {
    state.pagedPrisonAreas = pagedPrisonAreas;
  }
};

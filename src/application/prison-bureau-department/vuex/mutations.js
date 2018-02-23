import * as types from './mutation-types';
import _ from 'lodash';

export default {
  [types.SET_PRISON_BUREAU_DEPARTMENT](state, prisonBureauDepartment) {
    state.prisonBureauDepartment = prisonBureauDepartment;
  },
  [types.UPDATE_PRISON_BUREAU_DEPARTMENT](state, prisonBureauDepartment) {
    state.prisonBureauDepartment = _.cloneDeep(prisonBureauDepartment);
  },
  [types.SET_ALL_PRISON_BUREAU_DEPARTMENTS](state, allPrisonBureauDepartments) {
    state.allPrisonBureauDepartments = allPrisonBureauDepartments;
  },
  [types.SET_PAGED_PRISON_BUREAU_DEPARTMENTS](state, pagedPrisonBureauDepartments) {
    state.pagedPrisonBureauDepartments = pagedPrisonBureauDepartments;
  }
};

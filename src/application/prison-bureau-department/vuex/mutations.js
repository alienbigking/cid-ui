import * as types from './mutation-types';

export default {
  [types.SET_PRISON_BUREAU_DEPARTMENT](state, prisonBureauDepartment) {
      state.prisonBureauDepartment = prisonBureauDepartment;
  },
  [types.UPDATE_PRISON_BUREAU_DEPARTMENT](state, prisonBureauDepartment) {
      Object.assign(state.prisonBureauDepartment, prisonBureauDepartment);
  },
  [types.SET_ALL_PRISON_BUREAU_DEPARTMENTS](state, allPrisonBureauDepartments) {
      state.allPrisonBureauDepartments = allPrisonBureauDepartments;
  },
  [types.SET_PAGED_PRISON_BUREAU_DEPARTMENTS](state, pagedPrisonBureauDepartments) {
      state.pagedPrisonBureauDepartments = pagedPrisonBureauDepartments;
  }
};

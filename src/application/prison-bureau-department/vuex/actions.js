import * as types from './mutation-types';
import { default as prisonBureauDepartmentService } from '../service/prison-bureau-department-service';

export default {
  getPrisonBureauDepartment({ commit, state }, id) {
    return prisonBureauDepartmentService.get(id).then(prisonBureauDepartment => {
      commit(types.SET_PRISON_BUREAU_DEPARTMENT, prisonBureauDepartment);
    });
  },
  getAllPrisonBureauDepartments({ commit, state }) {
    return prisonBureauDepartmentService.getAll().then(prisonBureauDepartments => {
      commit(types.SET_ALL_PRISON_BUREAU_DEPARTMENTS, prisonBureauDepartments);
    });
  },
  getPagedPrisonBureauDepartments({ commit, state }, params) {
    return prisonBureauDepartmentService.getPaged(params).then(pagedPrisonBureauDepartments => {
      commit(types.SET_PAGED_PRISON_BUREAU_DEPARTMENTS, pagedPrisonBureauDepartments);
    });
  },
  addPrisonBureauDepartment({ commit, state }) {
    return prisonBureauDepartmentService.add(state.prisonBureauDepartment);
  },
  updatePrisonBureauDepartment({ commit, state }) {
    return prisonBureauDepartmentService.update(state.prisonBureauDepartment);
  },
  deletePrisonBureauDepartment({ commit }, id) {
    return prisonBureauDepartmentService.delete(id);
  }
};

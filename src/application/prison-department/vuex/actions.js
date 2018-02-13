import * as types from './mutation-types';
import prisonDepartmentService from '../service/prison-department-service';

export default {
  getPrisonDepartment({ commit, state }, id) {
    return prisonDepartmentService.get(id).then(prisonDepartment => {
      commit(types.SET_PRISON_DEPARTMENT, prisonDepartment);
    });
  },
  getAllPrisonDepartments({ commit, state }) {
    return prisonDepartmentService.getAll().then(prisonDepartments => {
      commit(types.SET_ALL_PRISON_DEPARTMENTS, prisonDepartments);
    });
  },
  getPagedPrisonDepartments({ commit, state }, params) {
    return prisonDepartmentService.getPaged(params).then(pagedPrisonDepartments => {
      commit(types.SET_PAGED_PRISON_DEPARTMENTS, pagedPrisonDepartments);
    });
  },
  addPrisonDepartment({ commit, state }) {
    return prisonDepartmentService.add(state.prisonDepartment);
  },
  updatePrisonDepartment({ commit, state }) {
    return prisonDepartmentService.update(state.prisonDepartment);
  },
  deletePrisonDepartment({ commit }, id) {
    return prisonDepartmentService.delete(id);
  }
};

import * as types from './mutation-types';

export default {
    [types.SET_PRISON_DEPARTMENT](state, prisonDepartment) {
        state.prisonDepartment = prisonDepartment;
    },
    [types.UPDATE_PRISON_DEPARTMENT](state, prisonDepartment) {
        Object.assign(state.prisonDepartment, prisonDepartment);
    },
    [types.SET_ALL_PRISON_DEPARTMENTS](state, allPrisonDepartments) {
        state.allPrisonDepartments = allPrisonDepartments;
    },
    [types.SET_PAGED_PRISON_DEPARTMENTS](state, pagedPrisonDepartments) {
        state.pagedPrisonDepartments = pagedPrisonDepartments;
    }
};

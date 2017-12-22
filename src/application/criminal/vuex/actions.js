import * as types from './mutation-types';
import { default as criminalService } from '../service/criminal-service';

export default {
    getTenant({ commit, state }, id) {
        return criminalService.get(id).then(criminal => {
            commit(types.SET_CRIMINAL, criminal);
        });
    },
    getPagedTenants({ commit, state }, params) {
        return criminalService.getPaged(params).then(criminals => {
            commit(types.SET_PAGED_CRIMINALS, criminals);
        });
    },
    addPrisonTenant({ commit, state }) {
        return criminalService.addPrisonTenant(state.criminal);
    },
    updatePrisonTenant({ commit, state }) {
        return criminalService.updatePrisonTenant(state.criminal);
    },
    deleteTenant({ commit }, id) {
        return criminalService.delete(id);
    },
    getGenders({ commit }) {
      return criminalService.getGenders().then(res => {
        commit(types.SET_GENDERS, res);
      });
    },
    getEthnicities({ commit }) {
      return criminalService.getEthnicities().then(res => {
        commit(types.SET_ETHNICITIES, res);
      });
    },
    getOccupations({ commit }) {
      return criminalService.getOccupations().then(res => {
        commit(types.SET_OCCUPATIONS, res);
      });
    },
    getEducationDegrees({ commit }) {
      return criminalService.getEducationDegrees().then(res => {
        commit(types.SET_EDUCATION_DEGREES, res);
      });
    },
    getPoliticalStatuses({ commit }) {
      return criminalService.getPoliticalStatuses().then(res => {
        commit(types.SET_POLITICAL_STATUES, res);
      });
    }
};

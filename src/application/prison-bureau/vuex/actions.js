import * as types from './mutation-types';
import { default as prisonBureauService } from '../service/prison-bureau-service';

export default {
  getPrisonBureau({ commit, state }, id) {
      return prisonBureauService.get(id).then(prisonBureau => {
          commit(types.SET_PRISON_BUREAU, prisonBureau);
      });
  },
  getAllPrisonBureaus({ commit, state }) {
      return prisonBureauService.getAll().then(prisonBureaus => {
          commit(types.SET_ALL_PRISON_BUREAUS, prisonBureaus);
      });
  },
  getPagedPrisonBureaus({ commit, state }, params) {
      return prisonBureauService.getPaged(params).then(pagedPrisonBureaus => {
          commit(types.SET_PAGED_PRISON_BUREAUS, pagedPrisonBureaus);
      });
  },
  addPrisonBureau({ commit, state }) {
      return prisonBureauService.add(state.prisonBureau);
  },
  updatePrisonBureau({ commit, state }) {
      return prisonBureauService.update(state.prisonBureau);
  },
  deletePrisonBureau({ commit }, id) {
      return prisonBureauService.delete(id);
  }
};

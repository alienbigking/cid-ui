import * as types from './mutation-types';
import courtService from '../service/court-service';

export default {
  getAllCourts({ commit, state }) {
    return courtService.getAll().then(allCourts => {
      commit(types.SET_ALL_COURTS, allCourts);
    });
  }
};

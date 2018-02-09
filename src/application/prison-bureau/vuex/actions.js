import * as types from './mutation-types';
import { default as prisonBureauService } from '../service/prison-bureau-service';

export default {
  getAllPrisonBureaus({ commit, state }) {
      return prisonBureauService.getAll().then(prisonBureaus => {
          commit(types.SET_ALL_PRISON_BUREAUS, prisonBureaus);
      });
  }
};

import * as types from './mutation-types';
import { default as prisonHouseService } from '../service/prison-house-service';

export default {
  getPrisonHouseList({ commit, state }) {
      return prisonHouseService.getPrisonHouseList().then(res => {
          if (!res) return false;
          commit(types.GET_PRISON_HOUSE_LIST, { prisonHouseList: res });
          return res;
      });
  }
};

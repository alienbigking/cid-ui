import * as types from './mutation-types';
import courtService from '../service/police-station-service';

export default {
  getAllPoliceStations({ commit, state }) {
    return courtService.getAll().then(allPoliceStations => {
      commit(types.SET_ALL_POLICE_STATION, allPoliceStations);
    });
  }
};

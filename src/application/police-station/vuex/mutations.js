import * as types from './mutation-types';

export default {
  [types.SET_ALL_POLICE_STATION](state, allPoliceStations) {
    state.allPoliceStations = allPoliceStations;
  }
};

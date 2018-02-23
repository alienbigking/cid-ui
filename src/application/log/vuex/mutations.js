import * as types from './mutation-types';
import _ from 'lodash';

export default {
  [types.SET_LOG](state, log) {
    state.log = log;
  },
  [types.UPDATE_LOG](state, log) {
    state.log = _.cloneDeep(log);
  },
  [types.SET_ALL_LOGS](state, allLogs) {
    state.allLogs = allLogs;
  },
  [types.SET_PAGED_LOGS](state, pagedLogs) {
    state.pagedLogs = pagedLogs;
  }
};

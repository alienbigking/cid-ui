import * as types from './mutation-types';
import { default as logService } from '../service/log-service';

export default {
  getLog({ commit, state }, params) {
    return logService.get(params).then(log => {
      commit(types.SET_LOG, log);
    });
  },
  getPagedLogs({ commit, state }, params) {
    return logService.getPaged(params).then(logs => {
      commit(types.SET_PAGED_LOGS, logs);
    });
  }
};

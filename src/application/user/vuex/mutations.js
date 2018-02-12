import * as types from './mutation-types';
import _ from "lodash";

export default {
  [types.SET_USER](state, user) {
    state.user = user;
  },
  [types.UPDATE_USER](state, user) {
    state.user = _.cloneDeep(user);
  },
  [types.SET_PAGED_USERS](state, pagedUsers) {
    state.pagedUsers = pagedUsers;
  },
  [types.SET_ROLES](state, role) {
    state.role = role;
  },
  [types.UPDATE_USER_ROLE](state, role) {
    state.role = role;
  },
  [types.SET_PERMISSIONS](state, permissions) {
    state.permissions = permissions;
  }
};

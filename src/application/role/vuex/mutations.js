import * as types from './mutation-types';
import _ from "lodash";

export default {
    [types.SET_ROLE](state, role) {
        state.role = role;
    },
    [types.UPDATE_ROLE](state, role) {
        state.role = _.cloneDeep(role);
    },
    [types.SET_ALL_ROLES](state, allRoles) {
        state.allRoles = allRoles;
    },
    [types.SET_PAGED_ROLES](state, pagedRoles) {
        state.pagedRoles = pagedRoles;
    },
    [types.SET_ALL_PERMISSIONS](state, allPermissions) {
        state.allPermissions = allPermissions;
    }
};

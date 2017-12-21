import * as types from './mutation-types';

export default {
    [types.SET_ROLE](state, role) {
        state.role = role;
    },
    [types.UPDATE_ROLE](state, role) {
        Object.assign(state.role, role);
    },
    [types.SET_ALL_ROLES](state, allRoles) {
        state.allRoles = allRoles;
    },
    [types.SET_PAGED_ROLES](state, pagedRoles) {
        state.pagedRoles = pagedRoles;
    }
};

import * as types from './mutation-types';

export default {
    [types.SET_USER](state, user) {
        state.user = user;
    },
    [types.UPDATE_USER](state, user) {
        Object.assign(state.user, user);
    },
    [types.SET_PAGED_USERS](state, pagedUsers) {
        state.pagedUsers = pagedUsers;
    },
    [types.SET_ROLES](state, role) {
        state.role = role;
    },
    [types.UPDATE_USER_ROLE](state, role) {
        state.role = role;
    }
};

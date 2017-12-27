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
    }
};

import * as types from './mutation-types';
import { default as userService } from '../service/user-service';

export default {
    getUser({ commit, state }, id) {
        return userService.get(id).then(user => {
            commit(types.SET_USER, user);
        });
    },
    getPagedUsers({ commit, state }, params) {
        return userService.getPaged(params).then(users => {
            commit(types.SET_PAGED_USERS, users);
        });
    },
    addUser({ commit, state }) {
        return userService.addUser(state.user);
    },
    updateUser({ commit, state }) {
        return userService.updateUser(state.user);
    },
    deleteUser({ commit }, id) {
        return userService.delete(id);
    }
};

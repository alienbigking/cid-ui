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
    },
    updatePassword({ commit }, { id, userPassword }) {
        return userService.updatePassword(id, userPassword);
    },
    enableUser({ commit }, id) {
        return userService.enableUser(id);
    },
    disableUser({ commit }, id) {
        return userService.disableUser(id);
    },
    getUserRoles({ commit, state }, id) {
        return userService.getRoles(id).then(role => {
            commit(types.SET_ROLES, role);
        });
    },
    updateUserRole({ commit, state }, id) {
        return userService.updateRole(id, state.role);
    },
    deleteUserRole({ commit, state }, id) {
        return userService.deleteRole(id);
    }
};

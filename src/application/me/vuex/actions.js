import * as types from './mutation-types';
import { default as userService } from '../service/user-service';

export default {
    getMyProfile({ commit, state }) {
        return userService.getMyProfile().then(myProfile => {
            commit(types.SET_MY_PROFILE, myProfile);
            commit(types.SET_PROFILE_STORAGE, myProfile);
        });
    },
    removeProfile({ commit }) {
        commit(types.REMOVE_PROFILE_STORAGE);
    },
    updateMyProfile({ commit, state }) {
        return userService.updateMyProfile(state.myProfile);
    },
    updateMyPassword({ commit }, userPassword) {
        return userService.updateMyPassword(userPassword);
    }
};

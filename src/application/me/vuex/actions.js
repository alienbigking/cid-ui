import * as types from './mutation-types';
import { default as userService } from '../service/user-service';

export default {
    getMyProfile({ commit }, userProfile) {
        userService.getMyProfile(userProfile).then(userProfile => {
            commit(types.SET_USER_PROFILE, { userProfile: userProfile });
        });
    },
    updateMyProfile({ commit }, userProfile) {
        userService.updateMyProfile(userProfile);
    },
    updateMyPassword({ commit }, userPassword) {
        userService.updateMyPassword(userPassword);
    }
};

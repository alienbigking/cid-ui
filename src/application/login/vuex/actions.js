import * as types from './mutation-types';
import { default as authService } from '../service/auth-service';
import { default as userService } from '../../me/service/user-service';

export default {
    login({ commit }, user) {
        return authService.login(user).then(token => {
            commit(types.SET_TOKEN, token);
        });
    },
    logout({ commit }) {
        commit(types.REMOVE_TOKEN);
    },
    getPersonaInformation({ commit }) {
        return userService.getMyProfile().then(personalInformation => {
            commit(types.SET_INFORMATION, personalInformation);
        });
    }
};

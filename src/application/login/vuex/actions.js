import * as types from './mutation-types';
import { default as authService } from '../service/auth-service';

export default {
    login({ commit }, user) {
        return authService.login(user);
    },
    logout({ commit }) {
        commit(types.REMOVE_TOKEN);
    }
};

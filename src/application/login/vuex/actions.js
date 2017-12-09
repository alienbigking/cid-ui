import * as types from './mutation-types';
import { default as authService } from '../service/auth-service';

export default {
    login({ commit }, user) {
        authService.login(user).then(token => {
            commit(types.SET_TOKEN, { token: token });
        });
    }
};

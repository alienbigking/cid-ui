import * as types from './mutation-types';
import jwtDecode from 'jwt-decode';

export default {
    [types.SET_TOKEN](state, token) {
        localStorage.setItem('TOKEN', JSON.stringify(token));
        var accessToken = jwtDecode(token.access_token);
        state.accessToken = accessToken;
    },
    [types.REMOVE_TOKEN](state) {
        localStorage.removeItem('TOKEN');
        state.accessToken = null;
    }
};

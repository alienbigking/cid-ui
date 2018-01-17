import * as types from './mutation-types';

export default {
    [types.SET_TOKEN](state, token) {
        localStorage.setItem('TOKEN', JSON.stringify(token));
    },
    [types.REMOVE_TOKEN](state) {
        localStorage.removeItem('TOKEN');
    }
};

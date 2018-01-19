import * as types from './mutation-types';

export default {
    [types.SET_MENUS](state, menus) {
        state.menus = menus;
    },
    [types.SET_COLLAPSED](state) {
        state.collapsed = !state.collapsed;
        sessionStorage.setItem("collapsed", state.collapsed);
    }
};

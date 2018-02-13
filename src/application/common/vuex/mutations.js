import * as types from './mutation-types';
import tokenStorage from "@/utils/token/token-storage";

export default {
  [types.SET_TOKEN](state, token) {
    tokenStorage.setToken(token);
  },
  [types.REMOVE_TOKEN](state) {
    tokenStorage.removeToken();
  },
  [types.SET_MENUS](state, menus) {
    state.menus = menus;
  },
  [types.SET_ACTIVE_MENU](state, activeMenuId) {
    state.activeMenuId = activeMenuId;
  },
  [types.TOGGLE_MENU_COLLAPSED](state) {
    state.menuCollapsed = !state.menuCollapsed;
  }
};

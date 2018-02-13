import * as types from "./mutation-types";
import authService from '../service/auth-service';
import menuService from "../service/menu-service";

export default {
  login({ commit }, user) {
    return authService.login(user).then(token => {
      commit(types.SET_TOKEN, token);
    });
  },
  logout({ commit }) {
    commit(types.REMOVE_TOKEN);
  },
  getMenus({ commit, rootState }, params) {
    return menuService.getMenus().then(menus => {
      commit(types.SET_MENUS, menus);
    });
  },
  setActiveMenu({ commit }, activeMenuId) {
    commit(types.SET_ACTIVE_MENU, activeMenuId);
  },
  toggleCollapsed({ commit }) {
    commit(types.TOGGLE_MENU_COLLAPSED);
  }
};

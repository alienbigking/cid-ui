import * as types from "./mutation-types";
import { default as menuService } from "../service/menu-service";

export default {
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

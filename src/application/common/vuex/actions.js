import * as types from "./mutation-types";
import { default as menuService } from "../service/menu-service";

export default {
  getMenus({ commit, rootState }, params) {
    return menuService.getMenus().then(menus => {
      commit(types.SET_MENUS, menus);
    });
  },
  handleCollapse({ commit }) {
    commit(types.SET_COLLAPSED);
  },
  setActiveItem({ commit }, activeItem) {
    commit(types.SET_ACTIVEITEM, activeItem);
  }
};

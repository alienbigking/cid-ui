import * as types from './mutation-types';

export default {
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

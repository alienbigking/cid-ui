import actions from './actions';
import mutations from './mutations';

const state = {
  menus: [],
  menuCollapsed: false,
  activeMenuId: ""
};

export default {
  state,
  actions,
  mutations
};

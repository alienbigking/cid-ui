import actions from './actions';
import mutations from './mutations';

const state = {
  menus: [],
  collapsed: Boolean(JSON.parse(sessionStorage.getItem("collapsed"))),
  activeItem: sessionStorage.getItem("activeItem") || ""
};
const getters = {
  collapsed: state => state.collapsed
};
export default {
  state,
  actions,
  getters,
  mutations
};

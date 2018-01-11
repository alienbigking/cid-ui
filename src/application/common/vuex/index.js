import actions from './actions';
import mutations from './mutations';

const state = {
    menus: [],
    collapsed: false
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

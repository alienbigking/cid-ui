import actions from './actions';
import mutations from './mutations';

const state = {
    allRoles: [],
    pagedRoles: { content: [] },
    role: {}
};

export default {
    state,
    actions,
    mutations
};

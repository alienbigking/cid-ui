import actions from './actions';
import mutations from './mutations';

const state = {
    allRoles: [],
    pagedRoles: { content: [] },
    role: {},
    allPermissions: []
};

export default {
    state,
    actions,
    mutations
};

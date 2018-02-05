import actions from './actions';
import mutations from './mutations';

const state = {
    pagedUsers: { content: [] },
    user: {},
    role: [],
    permissions: []
};

export default {
    state,
    actions,
    mutations
};

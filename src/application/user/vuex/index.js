import actions from './actions';
import mutations from './mutations';

const state = {
    pagedUsers: { content: [] },
    user: {},
    role: []
};

export default {
    state,
    actions,
    mutations
};

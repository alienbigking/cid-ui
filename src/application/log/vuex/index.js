import actions from './actions';
import mutations from './mutations';

const state = {
    pagedLogs: { content: [] },
    log: {}
};

export default {
    state,
    actions,
    mutations
};

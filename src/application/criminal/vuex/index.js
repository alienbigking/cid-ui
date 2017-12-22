import actions from './actions';
import mutations from './mutations';

const state = {
    allCriminals: [],
    pagedCriminals: { content: [] },
    criminal: {}
};

export default {
    state,
    actions,
    mutations
};

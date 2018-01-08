import actions from './actions';
import mutations from './mutations';

const state = {
  allPrisonBureaus: [],
  pagedPrisonBureaus: { content: [] },
  prisonBureau: {}
};

export default {
    state,
    actions,
    mutations
};

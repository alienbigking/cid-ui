import actions from './actions';
import mutations from './mutations';

const state = {
  allPrisonBureauDepartments: [],
  pagedPrisonBureauDepartments: { content: [] },
  prisonBureauDepartment: {}
};

export default {
    state,
    actions,
    mutations
};

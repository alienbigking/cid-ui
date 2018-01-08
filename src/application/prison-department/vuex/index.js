import actions from './actions';
import mutations from './mutations';

const state = {
    allPrisonDepartments: [],
    pagedPrisonDepartments: { content: [] },
    prisonDepartment: {}
};

export default {
    state,
    actions,
    mutations
};

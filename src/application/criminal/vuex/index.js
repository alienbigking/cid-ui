import actions from './actions';
import mutations from './mutations';

const state = {
    pagedTenants: { content: [] },
    criminal: {},
    genders: [],
    ethnicities: [],
    occupations: [],
    educationDegrees: [],
    politicalStatuses: []
};

export default {
    state,
    actions,
    mutations
};

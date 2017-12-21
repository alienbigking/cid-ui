import * as types from './mutation-types';

export default {
    [types.SET_CRIMINAL](state, criminal) {
        state.criminal = criminal;
    },
    [types.UPDATE_CRIMINAL](state, criminal) {
        Object.assign(state.criminal, criminal);
    },
    [types.SET_PAGED_CRIMINALS](state, pagedTenants) {
        state.pagedTenants = pagedTenants;
    },
    [types.SET_GENDERS](state, genders) {
        state.genders = genders;
    },
    [types.SET_ETHNICITIES](state, ethnicities) {
        state.ethnicities = ethnicities;
    },
    [types.SET_OCCUPATIONS](state, occupations) {
        state.occupations = occupations;
    },
    [types.SET_EDUCATION_DEGREES](state, educationDegrees) {
        state.educationDegrees = educationDegrees;
    },
    [types.SET_POLITICAL_STATUES](state, politicalStatuses) {
        state.politicalStatuses = politicalStatuses;
    }
};

import * as types from './mutation-types';

export default {
    [types.SET_ALL_COURTS](state, allCourts) {
        state.allCourts = allCourts;
    }
};

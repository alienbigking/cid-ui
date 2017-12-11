import * as types from './mutation-types';

export default {
    [types.SET_USER_PROFILE](state, { userProfile }) {
        state.userProfile = userProfile;
    }
};

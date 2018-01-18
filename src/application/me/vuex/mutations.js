import * as types from './mutation-types';
import _ from "lodash";

export default {
    [types.SET_USER_PROFILE](state, userProfile) {
        state.userProfile = userProfile;
    },
    [types.UPDATE_USER_PROFILE](state, userProfile) {
        state.userProfile = _.cloneDeep(userProfile);
    },
    [types.SET_MYPROFILE](state, userProfile) {
        localStorage.setItem('myProfile', JSON.stringify(userProfile));
    }
};

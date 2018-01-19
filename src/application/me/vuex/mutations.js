import * as types from './mutation-types';
import _ from "lodash";

export default {
    [types.SET_MY_PROFILE](state, myProfile) {
        state.myProfile = myProfile;
        localStorage.setItem('myProfile', JSON.stringify(myProfile));
    },
    [types.UPDATE_MY_PROFILE](state, myProfile) {
        state.myProfile = _.cloneDeep(myProfile);
    }
};

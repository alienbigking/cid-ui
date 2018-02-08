import * as types from './mutation-types';
import profileStorage from './../../common/service/profile-storage';
import _ from "lodash";

export default {
  [types.SET_MY_PROFILE](state, myProfile) {
    state.myProfile = myProfile;
  },
  [types.SET_PROFILE_STORAGE](state, myProfile) {
    profileStorage.setMyProfile(myProfile);
  },
  [types.UPDATE_MY_PROFILE](state, myProfile) {
    state.myProfile = _.cloneDeep(myProfile);
  }
};

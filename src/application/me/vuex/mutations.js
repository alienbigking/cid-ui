import * as types from './mutation-types';
import profileStorage from '@/utils/profile/profile-storage';
import _ from "lodash";

export default {
  [types.SET_MY_PROFILE](state, myProfile) {
    state.myProfile = myProfile;
    profileStorage.setMyProfile(myProfile);
  },
  [types.UPDATE_MY_PROFILE](state, myProfile) {
    state.myProfile = _.cloneDeep(myProfile);
    profileStorage.setMyProfile(myProfile);
  }
};

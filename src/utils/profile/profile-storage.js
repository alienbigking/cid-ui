const MY_PROFILE = 'myProfile';

export default {
  getMyProfile() {
    const myProfile = sessionStorage.getItem(MY_PROFILE);
    return JSON.parse(myProfile);
  },
  setMyProfile(myProfile) {
    sessionStorage.setItem(MY_PROFILE, JSON.stringify(myProfile));
  },
  removeMyProfile() {
    sessionStorage.removeItem(MY_PROFILE);
  }
};

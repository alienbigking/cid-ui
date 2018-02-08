const MY_PROFILE = "MY_PROFILE";

export default {
  getMyProfile() {
    const myProfile = localStorage.getItem(MY_PROFILE);
    return JSON.parse(myProfile);
  },
  setMyProfile(myProfile) {
    localStorage.setItem(MY_PROFILE, JSON.stringify(myProfile));
  },
  removeMyProfile() {
    localStorage.removeItem(MY_PROFILE);
  }
};

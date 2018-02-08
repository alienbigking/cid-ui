const MYPROFILE = "MYPROFILE";

export default {
  getMyProfile() {
    const myProfile = localStorage.getItem('MYPROFILE');
    return JSON.parse(myProfile);
  },
  setMyProfile(myProfile) {
    localStorage.setItem(MYPROFILE, JSON.stringify(myProfile));
  },
  removeMyProfile() {
    localStorage.removeItem(MYPROFILE);
  }
};

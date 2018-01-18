export default {
    getMyProfile() {
        const myProfile = localStorage.getItem('myProfile');
        return JSON.parse(myProfile);
    }
};

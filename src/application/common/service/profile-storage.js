export default {
    getProfile() {
        const myProfile = localStorage.getItem('profile');
        if (myProfile) {
            const profile = JSON.parse(myProfile);
            return profile;
        }
    }
};

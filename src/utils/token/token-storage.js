export default {
    getToken() {
        const tokenStorage = localStorage.getItem("TOKEN");
        if (tokenStorage) {
            return JSON.parse(tokenStorage);
        }
    },
    setToken(token) {
        localStorage.setItem("TOKEN", JSON.stringify(token));
    }
};

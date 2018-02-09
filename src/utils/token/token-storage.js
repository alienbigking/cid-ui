const TOKEN = "token";

export default {
  getToken() {
    return JSON.parse(localStorage.getItem(TOKEN));
  },
  setToken(token) {
    localStorage.setItem(TOKEN, JSON.stringify(token));
  },
  removeToken() {
    localStorage.removeItem(TOKEN);
  }
};

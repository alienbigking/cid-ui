const MY_MENUS = "myMenus";

export default {
  getMyMenus() {
    const menus = localStorage.getItem(MY_MENUS);
    return JSON.parse(menus);
  },
  setMyMenus(menus) {
    localStorage.setItem(MY_MENUS, JSON.stringify(menus));
  },
  removeMyMenus() {
    localStorage.removeItem(MY_MENUS);
  }
};

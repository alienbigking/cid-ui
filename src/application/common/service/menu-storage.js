const MY_MENUS = 'myMenus';

export default {
  getMyMenus() {
    const menus = sessionStorage.getItem(MY_MENUS);
    return JSON.parse(menus);
  },
  setMyMenus(menus) {
    sessionStorage.setItem(MY_MENUS, JSON.stringify(menus));
  },
  removeMyMenus() {
    sessionStorage.removeItem(MY_MENUS);
  }
};

import axios from 'axios';
import menuStorage from './menu-storage';

export default {
  getMenus() {
    let menus = menuStorage.getMyMenus();
    if (menus) {
      return Promise.resolve(menus);
    }
    return axios.get(`api/menus`).then(response => {
      menus = response.data;
      menuStorage.setMyMenus(menus);
      return menus;
    });
  }
};

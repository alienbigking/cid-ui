import axios from 'axios';
import menuStorage from './menu-storage';

function populateIndex(menus, prefix) {
  menus.forEach((menu, index) => {
    if (prefix) {
      menu.index = prefix + '-' + index;
    } else {
      menu.index = index.toString();
    }
    populateIndex(menu.children, menu.index);
  });
}

export default {
  getMenus() {
    let menus = menuStorage.getMyMenus();
    if (menus) {
      return Promise.resolve(menus);
    }
    return axios.get(`api/menus`).then(response => {
      menus = response.data;
      populateIndex(menus);
      menuStorage.setMyMenus(menus);
      return menus;
    });
  }
};

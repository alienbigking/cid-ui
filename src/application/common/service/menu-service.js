import axios from 'axios';

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
  getMenus(tenantType) {
    if (localStorage.getItem('menus')) {
      const menus = localStorage.getItem('menus');
      return new Promise((resolve, reject) => {
        resolve(JSON.parse(menus));
      });
    } else {
      return axios.get(`api/menus`).then(response => {
        const menus = response.data;
        populateIndex(menus);
        localStorage.setItem('menus', JSON.stringify(menus));
        return menus;
      });
    }
  }
};

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
        let menus = localStorage.getItem('menus');
        if (menus) {
            return new Promise((resolve, reject) => {
                resolve(JSON.parse(menus));
            });
        }
        return axios.get(`api/menus`).then(response => {
            menus = response.data;
            populateIndex(menus);
            localStorage.setItem('menus', JSON.stringify(menus));
            return menus;
        });
    }
};

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
        return axios.get(`api/menus`).then(response => {
            const menus = response.data;
            populateIndex(menus);
            return menus;
        });
    }
};

import * as types from './mutation-types';
import { default as menuService } from '../service/menu-service';

export default {
    getMenus({ commit, rootState }, params) {
        const tenantType = rootState.login.accessToken.tenant_type;
        return menuService.getMenus(tenantType).then(menus => {
            commit(types.SET_MENUS, menus);
        });
    },
    handleCollapse({ commit }) {
        commit(types.SET_COLLAPSED);
    }
};

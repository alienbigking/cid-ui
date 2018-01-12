import * as types from './mutation-types';
import { default as menuService } from '../service/menu-service';
import tokenStorage from '@/utils/token/token-storage';

export default {
    getMenus({ commit, rootState }, params) {
        let tenantType;
        const accessToken = tokenStorage.decodeAccessToken();
        if (accessToken) {
            tenantType = accessToken.tenant_type;
        }
        return menuService.getMenus(tenantType).then(menus => {
            commit(types.SET_MENUS, menus);
        });
    },
    handleCollapse({ commit }) {
        commit(types.SET_COLLAPSED);
    }
};

import * as types from "./mutation-types";
import { default as menuService } from "../service/menu-service";
import tokenStorage from "@/utils/token/token-storage";
import jwtDecode from "jwt-decode";

export default {
    getMenus({ commit, rootState }, params) {
        let tenantPlatform;
        const token = tokenStorage.getToken();
        if (token) {
            const accessToken = jwtDecode(token.access_token);
            tenantPlatform = accessToken.tenant_platform;
        }
        return menuService.getMenus(tenantPlatform).then(menus => {
            commit(types.SET_MENUS, menus);
        });
    },
    handleCollapse({ commit }) {
        commit(types.SET_COLLAPSED);
    },
    setActiveItem({ commit }, activeItem) {
        commit(types.SET_ACTIVEITEM, activeItem);
    }
};

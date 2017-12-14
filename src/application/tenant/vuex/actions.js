import * as types from './mutation-types';
import { default as tenantService } from '../service/tenant-service';

export default {
    getTenant({ commit, state }) {
        return tenantService.get().then(tenant => {
            commit(types.SET_TENANT, { tenant: tenant });
        });
    },
    getAllTenants({ commit, state }, params) {
        return tenantService.getAll(params).then(tenants => {
            commit(types.SET_TENANTS, tenants);
        });
    },
    addTenant({ commit, state }, data) {
        return tenantService.addTenant(data);
    },
    updateTenant({ commit, state }) {
        return tenantService.updateTenant(state.tenant);
    },
    deleteTenant({ commit }, id) {
        return tenantService.delete(id);
    }
};

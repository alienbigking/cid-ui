import * as types from './mutation-types';
import { default as tenantService } from '../service/tenant-service';

export default {
    getTenant({ commit, state }, id) {
        return tenantService.get(id).then(tenant => {
            commit(types.SET_TENANT, { tenant: tenant });
        });
    },
    getAllTenants({ commit, state }, params) {
        return tenantService.getAll(params).then(tenants => {
            commit(types.SET_TENANTS, tenants);
        });
    },
    addTenant({ commit, state }, tenant) {
        return tenantService.addTenant(tenant);
    },
    updateTenant({ commit, state }, tenant) {
        return tenantService.updateTenant(tenant);
    },
    deleteTenant({ commit }, id) {
        return tenantService.delete(id);
    }
};

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
    addPrisonTenant({ commit, state }, tenant) {
        return tenantService.addPrisonTenant(tenant);
    },
    updatePrisonTenant({ commit, state }, tenant) {
        return tenantService.updatePrisonTenant(tenant);
    },
    deleteTenant({ commit }, id) {
        return tenantService.delete(id);
    }
};

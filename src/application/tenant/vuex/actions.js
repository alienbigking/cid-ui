import * as types from './mutation-types';
import { default as tenantService } from '../service/tenant-service';

export default {
    getTenant({ commit, state }) {
        return tenantService.get().then(tenant => {
            commit(types.SET_TENANT, { tenant: tenant });
        });
    },
    getAllTenants({ commit, state }) {
        return tenantService.getAll().then(tenants => {
            commit(types.SET_TENANTS, { tenants: tenants });
        });
    },
    addPrisonTenant({ commit, state }) {
        return tenantService.addPrisonTenant(state.tenant);
    },
    updatePrisonTenant({ commit, state }) {
        return tenantService.updatePrisonTenant(state.tenant);
    },
    deleteTenant({ commit }, id) {
        return tenantService.delete(id);
    }
};

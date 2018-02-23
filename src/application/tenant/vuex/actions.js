import * as types from './mutation-types';
import tenantRegisterService from '../service/tenant-register-service';
import tenantService from '../service/tenant-service';

export default {
  addPrisonTenant({ commit, state }) {
    return tenantRegisterService.addPrisonTenant(state.tenant);
  },
  getTenant({ commit, state }, id) {
    return tenantService.get(id).then(tenant => {
      commit(types.SET_TENANT, tenant);
    });
  },
  getPagedTenants({ commit, state }, params) {
    return tenantService.getPaged(params).then(tenants => {
      commit(types.SET_PAGED_TENANTS, tenants);
    });
  },
  updateTenant({ commit, state }) {
    return tenantService.update(state.tenant);
  },
  deleteTenant({ commit }, id) {
    return tenantService.delete(id);
  },
  enableTenant({ commit }, id) {
    return tenantService.enableTenant(id);
  },
  disableTenant({ commit }, id) {
    return tenantService.disableTenant(id);
  }
};

import * as types from './mutation-types';
import _ from "lodash";

export default {
    [types.SET_TENANT](state, tenant) {
        state.tenant = tenant;
    },
    [types.UPDATE_TENANT](state, tenant) {
        state.tenant = _.cloneDeep(tenant);
    },
    [types.SET_PAGED_TENANTS](state, pagedTenants) {
        state.pagedTenants = pagedTenants;
    }
};

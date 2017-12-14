import * as types from './mutation-types';

export default {
    [types.SET_TENANT](state, { tenant }) {
        state.tenant = tenant;
    },
    [types.SET_TENANTS](state, tenants) {
        state.tenants = tenants;
    }
};

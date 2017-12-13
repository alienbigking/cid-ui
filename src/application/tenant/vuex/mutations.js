import * as types from './mutation-types';

export default {
    [types.GET_TENANT_LIST](state, { tenantList }) {
        state.tenantList = tenantList;
    }
};

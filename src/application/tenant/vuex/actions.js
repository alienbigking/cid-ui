import * as types from './mutation-types';
import { default as tenantService } from '../service/tenant-service';

export default {
    getTenantList({ commit, state }) {
        return tenantService.getTenantList().then(res => {
            if (!res) return false;
            commit(types.GET_TENANT_LIST, { tenantList: res });
            return res;
        });
    }
};

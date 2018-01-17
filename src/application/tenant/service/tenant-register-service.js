import axios from 'axios';

export default {
    addPrisonTenant(tenant) {
        return axios.post('api/tenant-registers/prison', tenant);
    }
};

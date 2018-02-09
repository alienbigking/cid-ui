import * as types from './mutation-types';
import { default as courtService } from '../service/procuratorate-service';

export default {
    getAllProcuratorates({ commit, state }) {
        return courtService.getAll().then(allProcuratorates => {
            commit(types.SET_ALL_PROCURATORATE, allProcuratorates);
        });
    }
};

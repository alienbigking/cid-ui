import * as types from './mutation-types';
import { default as prisonService } from '../service/prison-service';

export default {
    getAllPrisons({ commit, state }) {
        return prisonService.getAll().then(allPrisons => {
            commit(types.SET_ALL_PRISONS, allPrisons);
        });
    }
};
